import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref, nextTick } from 'vue';

// Mock the generated gql hooks used by Dashboard
vi.mock('gql/api', () => {
  const { ref: vref } = require('vue');
  return {
    useGetCategoriesQuery: () => ({ data: vref({ categories: [] }) }),
    useGetBooksPagedQuery: () => ({ data: vref({ books: [ { id: '23d44ec3-7ed0-4d9b-aee1-8b88db71cea8', title: 'Test Book', book_inventory: { quantity: 1 }, book_loans_aggregate: { aggregate: { count: 1 } } } ] }), fetching: vref(false), error: vref(null), executeQuery: vi.fn() }),
    useGetBooksByCategoryPagedQuery: () => ({ data: vref({ books: [] }), fetching: vref(false), error: vref(null), executeQuery: vi.fn() }),
    useGetUsersQuery: () => ({ data: vref({ users: [] }), fetching: vref(false), error: vref(null), executeQuery: vi.fn() }),
    useActiveLoansForBookQuery: () => {
      const data = vref(null);
      const fetching = vref(false);
      const error = vref(null);
      const executeQuery = vi.fn(async ({ variables } = {}) => {
        // Simulate server returning one active loan for the given bookId
        data.value = {
          book_loans: [
            {
              id: 'loan-1',
              borrowed_at: '2025-01-01T00:00:00Z',
              due_at: '2025-02-01T00:00:00Z',
              user: { id: 'user-1', name: 'Alice', email: 'alice@example.com' },
            },
          ],
        };
        return { data, fetching, error };
      });
      return { data, fetching, error, executeQuery };
    },
    useReturnLoanMutation: () => ({ executeMutation: vi.fn(async () => ({ data: { update_book_loans_by_pk: { id: 'loan-1' } }, error: null })) }),
  };
});

import Dashboard from '../Dashboard.vue';

describe('Dashboard return flow', () => {
  it('shows active loans when opening return modal', async () => {
    const wrapper = mount(Dashboard);

    // ensure initial render
    await nextTick();

    // find the Return button for our test book and click it
    const returnButtons = wrapper.findAll('button');
    const returnBtn = returnButtons.find((b) => b.text() === 'Return');
    expect(returnBtn).toBeTruthy();
    await returnBtn!.trigger('click');

    // wait for executeQuery mock to run and component to update
    await nextTick();
    await nextTick();

    // modal should be visible and show the mocked loan user
    expect(wrapper.html()).toContain('Return: Test Book');
    expect(wrapper.html()).toContain('Alice');
    expect(wrapper.html()).toContain('alice@example.com');
  });
});
