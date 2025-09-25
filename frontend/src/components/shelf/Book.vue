<template>
    <div class="book">
        <div class="left-page" :aria-label="props.book?.title || 'Book cover'" role="img">
            <img
                loading="lazy"
                v-if="props.book?.image_thumbnail_url"
                :src="props.book.image_thumbnail_url" alt="Cover"
                class="cover-img" />
            
            <div v-else class="cover-placeholder" role="img">
                <div class="book-bind-placeholder" />
            </div>
        </div>

        <div class="right-page">
            <div class="book-title">{{ bookTitle }}</div>
            <div class="book-details">
                <div>Available: {{ availableCount }}</div>
                <div>Checked out: {{ checkedOutCount }}</div>
            </div>
            <div class="book-controls">
                <button class="btn btn-success" @click="openCheckout">Checkout</button>
                <button class="btn btn-warn" @click="openReturn">Return</button>
                <button class="info-icon" @click="openInfo" aria-label="Book info"></button>
            </div>
        </div>
    </div>

    <!-- Checkout modal (per-book) -->
    <div v-if="showCheckoutModal" class="modal-backdrop" @click.self="closeCheckout">
        <div class="modal">
            <div class="modal-container">
                <h3>Checkout: {{ props.book?.title || 'Book' }}</h3>
                <div class="modal-controls">
                    <input v-model="qUsers" placeholder="Search users by name or email" class="search" />
                </div>
    
                <div v-if="usersFetching" class="status">Loading users...</div>
                <div v-if="usersError" class="status error">Error loading users: {{ usersError.message }}</div>
    
                <ul class="user-list-modal">
                    <li v-for="u in filteredUsers" :key="u.id" class="user-row">
                        <div>
                            <div class="name">{{ u.name }}</div>
                            <div class="email">{{ u.email }}</div>
                        </div>
                        <div class="actions">
                            <button class="btn btn-info" @click="selectUser(u)" :disabled="checkingOut">Select</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="modal-actions">
                <button class="btn btn-warn" @click="closeCheckout">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Return modal (per-book) -->
    <div v-if="showReturnModal" class="modal-backdrop" @click.self="closeReturn">
        <div class="modal">
            <div class="modal-container">
                <h3>Return: {{ props.book?.title || 'Book' }}</h3>
                <div class="modal-controls">
                    <input v-model="qReturnUsers" placeholder="Search by name or email" class="search" />
                </div>
                <div v-if="activeLoansFetching" class="status">Loading loans...</div>
                <div v-if="activeLoansError" class="status error">Error loading loans: {{ activeLoansError.message }}</div>
                <ul class="user-list-modal">
                    <li v-for="loan in filteredReturnLoans" :key="loan.id" class="user-row">
                        <div>
                            <div class="name">{{ loan.user?.name || '—' }}</div>
                            <div class="email">{{ loan.user?.email || '—' }}</div>
                            <div class="meta">Borrowed: {{ loan.borrowed_at }} · Due: {{ loan.due_at }}</div>
                        </div>
                        <div class="actions">
                            <button class="btn btn-info" @click="markReturned(loan)" :disabled="returning">Mark returned</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div style="text-align:right;margin-top:.6rem;">
                <button class="btn btn-warn" @click="closeReturn">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Info modal (per-book) -->
    <div v-if="showInfoModal" class="modal-backdrop" @click.self="closeInfo">
        <div class="modal">
            <div class="modal-container">
                <h3>{{ props.book?.title || 'Book' }}</h3>
                <div class="info-meta">
                    <p>Author: {{ bookAuthors }}</p>
                    <p>Date: {{ props.book?.published_date || 'Unknown' }}</p>
                </div>
                <p class="info-desc">{{ bookDescription }}</p>
            </div>
            <div class="modal-actions">
                <button class="btn btn-warn" @click="closeInfo">Close</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue';
import { useMutation } from '@urql/vue';
import { useGetEligibleUsersForBookQuery, useActiveLoansForBookQuery, useReturnLoanMutation } from 'gql/api';
import gql from 'graphql-tag';

const props = defineProps<{ book?: {
    id?: string;
    title?: string;
    image_thumbnail_url?: string;
    description?: string;
    published_date?: string;
    book_authors?: Array<{ ord?: number; author?: { id?: string; name?: string } }>;
    book_inventory?: { quantity?: number };
} }>();
const emit = defineEmits<{
    (e: 'checked-out', book?: any): void;
    (e: 'returned', book?: any): void;
}>();

const showCheckoutModal = ref(false);
const qUsers = ref('');
const checkingOut = ref(false);
const showReturnModal = ref(false);
const qReturnUsers = ref('');
const showInfoModal = ref(false);
const returning = ref(false);

const bookTitle = computed(() => {
    return props.book?.title ?? 'Untitled';
});
const bookDescription = computed(() => {
    return props.book?.description ?? 'No description available';
});

const bookAuthors = computed(() => {
    const list = props.book?.book_authors ?? [];
    if (!list.length) return 'Unknown';
    // sort by ord then map to author names
    const sorted = [...list].sort((a, b) => (a.ord ?? 0) - (b.ord ?? 0));
    const names = sorted.map((ba: any) => ba.author?.name).filter(Boolean);
    return names.length ? names.join(', ') : 'Unknown';
});
const bookAvailability = computed(() => {
    return props.book?.book_inventory?.quantity ?? 0;
});

const usersVars = computed(() => ({
    bookId: props.book?.id ?? '00000000-0000-0000-0000-000000000000',
    q: qUsers.value.trim() ? `%${qUsers.value.trim()}%` : '%%',
}));

const {
    data: usersData,
    fetching: usersFetching,
    error: usersError,
    executeQuery: usersExec,
} = useGetEligibleUsersForBookQuery({
    variables: usersVars,
    requestPolicy: 'cache-and-network',
    pause: computed(() => !showCheckoutModal.value || !props.book?.id),
});

const filteredUsers = computed(() => {
    const list = usersData.value?.users ?? [];
    const term = qUsers.value.trim().toLowerCase();
    if (!term) return list;
    return list.filter((u: any) => {
        const name = (u.name || '').toLowerCase();
        const email = (u.email || '').toLowerCase();
        return name.includes(term) || email.includes(term);
    });
});

async function openCheckout() {
    showCheckoutModal.value = true;
    await nextTick();
    usersExec({ requestPolicy: 'network-only' });
}

function closeCheckout() {
    showCheckoutModal.value = false;
    qUsers.value = '';
}

const InsertLoanDoc = gql`
    mutation InsertLoan($object: book_loans_insert_input!) {
        insert_book_loans_one(object: $object) { id }
    }
`;

const insertLoanMutation = useMutation(InsertLoanDoc) as any;
const executeInsertLoan = async (vars: any) => {
    if (Array.isArray(insertLoanMutation) && typeof insertLoanMutation[1] === 'function') {
        return await insertLoanMutation[1](vars);
    }
    if (insertLoanMutation && typeof insertLoanMutation.executeMutation === 'function') {
        return await insertLoanMutation.executeMutation(vars);
    }
    throw new Error('useMutation returned unexpected shape');
};

async function selectUser(u: any) {
    if (!props.book || !props.book.id) return;
    checkingOut.value = true;
    try {
        const object = {
            book_id: props.book.id,
            user_id: u.id,
            borrowed_at: new Date().toISOString(),
            due_at: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        };

        const res = await executeInsertLoan({ object });
        if (res.error) {
            console.error('Insert loan failed', res.error);
        } else {
            // notify parent so it can refresh lists
            emit('checked-out', props.book);
            closeCheckout();
        }
    } catch (err) {
        console.error('Checkout error', err);
    } finally {
        checkingOut.value = false;
    }
}

async function openInfo() {
    showInfoModal.value = true;
    await nextTick();
}

function closeInfo() {
    showInfoModal.value = false;
}

async function openReturn() {
    showReturnModal.value = true;
    await nextTick();
    activeLoansExec({ variables: { bookId: props.book?.id }, requestPolicy: 'cache-and-network' });
}

function closeReturn() {
    showReturnModal.value = false;
    qReturnUsers.value = '';
}

const {
    data: activeLoansData,
    fetching: activeLoansFetching,
    error: activeLoansError,
    executeQuery: activeLoansExec,
} = useActiveLoansForBookQuery({
    variables: computed(() => ({ bookId: props.book?.id })),
    requestPolicy: 'cache-and-network',
    // fetch active loans when we have a book id so we can show counts
    pause: computed(() => !props.book?.id),
});

const filteredReturnLoans = computed(() => {
    const list = activeLoansData.value?.book_loans ?? [];
    const term = qReturnUsers.value.trim().toLowerCase();
    if (!term) return list;
    return list.filter((l: any) => {
        const name = (l.user?.name || '').toLowerCase();
        const email = (l.user?.email || '').toLowerCase();
        return name.includes(term) || email.includes(term);
    });
});

// counts: number of active loans (checked out) and available copies
const checkedOutCount = computed(() => (activeLoansData.value?.book_loans ?? []).length);
const availableCount = computed(() => {
    const total = props.book?.book_inventory?.quantity ?? 0;
    return Math.max(total - checkedOutCount.value, 0);
});

const returnLoanMutation = useReturnLoanMutation();

async function markReturned(loan: any) {
    if (!loan || !loan.id) return;
    returning.value = true;
    try {
        const res = await returnLoanMutation.executeMutation({ id: loan.id, changes: { returned_at: new Date().toISOString() } });
        if (res.error) {
            console.error('Return failed', res.error);
        } else {
            // notify parent to refresh counts
            emit('returned', props.book);
            activeLoansExec({ requestPolicy: 'network-only' });
            closeReturn();
        }
    } catch (err) {
        console.error('Return error', err);
    } finally {
        returning.value = false;
    }
}
</script>

<style scoped lang="scss">
$blue: #0069A4;
$green: #388528;
$orange: #D85300;
$yellow: #F1B700;
.book {
    display: flex;
    width: 100%;
    height: 14rem;
    max-width: 430px;
    border: 2px solid $blue;

    border-radius: .25rem;
    overflow: hidden;
    box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 9px 0px rgba(0,0,0,0.75);

    .left-page {
        width: 30%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        // position: relative;
        border-right: 2px solid $blue;

        .cover-img {
        //   position: absolute;
        //   inset: 0;
          width: 100%;
          height: 100%;
          object-fit: fill;
        //   display: block;
        }

        .cover-placeholder {
            background: $orange;
            width: 100%;
            height: 100%;

            .book-bind-placeholder {
                width: 10%;
                height: 100%;
                background: rgba(255, 255, 255, 0.5);
            }
        }
    }

    .right-page {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 1rem;
        width: 70%;
        background: rgb(246, 246, 246);

        .book-controls {
            display: flex;
            align-items: center;
        }
    }

    .book-title {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .book-details {
        width: 50%;
        text-wrap: nowrap;
        font-size: 1.2rem;
    }
    .cover {
        font-size: 0.95rem;
        color: #fff;
        text-align: center;
        padding: 0.5rem;
    }
}

/* modal styles (copied from Dashboard.vue) */
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 60;
}

.modal {
    position: relative;
    background: #fff;
    border-radius: 8px;
    width: min(760px, 96%);
     max-height: 80vh;
     /* make modal a column so header/content/actions can be laid out
         and only the content area scrolls */
     display: flex;
     flex-direction: column;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);

    .modal-container {
        margin-bottom: .5rem;
        padding: 1rem;
        overflow: auto;
        max-height: calc(80vh - 64px);
        flex: 1 1 auto;
    }

    .info-meta {
        margin: .5rem 0;
        font-size: 1rem;
    }
    .info-desc {
        font-size: 1.3rem;
        line-height: 2rem;
    }

    .modal-actions {
        padding: .5rem 1rem;
        /* keep actions visible under the modal container; don't use sticky
           which references the viewport — let the modal layout handle it */
        position: relative;
        text-align: right;
        background: #fff;
        box-shadow: 0px -3px 16px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px -3px 16px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px -3px 16px 0px rgba(0,0,0,0.75);
        /* ensure actions don't shrink when modal is squeezed */
        flex: 0 0 auto;
    }
}

.modal .search {
    width: 100%;
    margin: .5rem 0;
    padding: .75rem 1rem;
}

.user-list-modal {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.user-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid #eee;
    border-radius: 6px;
}

.user-row .name {
    font-weight: 600;
}

.user-row .email {
    color: #666;
    font-size: 0.9rem;
}

.primary {
    background: #2b6cb0;
    color: #fff;
    border: none;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    cursor: pointer;
}

.primary[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.status {
    margin: 0.5rem 0;
    color: #444;
}

.status.error {
    color: #b00020;
}

.btn {
    padding: .5rem 1rem;
    border-radius: .25rem;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-right: 0.5rem;

    &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:last-of-type {
        margin-right: 0;
    }
}
.btn-success {
    border: 2px solid $green;
    background: #fff;

    &:hover {
        background: $green;
        color: #fff;
    }
}
.btn-info {
    border: 2px solid $blue;
    background: #fff;

    &:hover {
        background: $blue;
        color: #fff;
    }
}
.btn-warn {
    border: 2px solid $orange;
    background: #fff;

    &:hover {
        background: $orange;
        color: #fff;
    }
}

.info-icon {
    height: 100%;
    position: relative;
    font-family:monospace;
    font-size: 1rem;
    font-weight: bold;
    border: 2px solid $blue;
    border-radius: 50%;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: $blue;

    &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "i";
    }

    &:hover {
        background: $blue;
        color: #fff;
    }
}

// responsive: hide left-page on very small screens
@media (max-width: 500px) {
    .book {
        height: auto;

        .left-page {
            display: none;
        }

        .right-page {
            width: 100%;
            padding-left: .75rem;
        }

        .book-details {
            width: 100%;
            transform: none;
            font-size: 1rem;
        }
    }
}
</style>