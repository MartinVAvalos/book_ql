// import { createApp } from 'vue'
// import '@/style.scss'
// import App from '@/App.vue'
// import router from '@/components/router.ts'
// import { Client, provideClient, cacheExchange, fetchExchange } from '@urql/vue';

// const client = new Client({
//     url: import.meta.env.VITE_GRAPHQL_URL,
//     exchanges: [cacheExchange, fetchExchange],
//   });
// const client = createClient({
//     url: import.meta.env.VITE_GRAPHQL_URL,
//     exchanges: []
// });

// // createApp(App).use(router).mount('#app');

// provideClient(client);

// const app = createApp(App);

// // app.use(provideClient(client));
// // app.use(provideClient([client])).use(router).mount('#app');

// // app.mount('#app');

// createApp(App).use(router).mount('#app');


// import { createApp } from 'vue'
// import '@/style.scss'
// import App from '@/App.vue'
// import router from '@/components/router.ts'
// import urql, { cacheExchange, fetchExchange } from '@urql/vue';

// const app = createApp(App);

// app.use(router);

// app.use(urql, {
//   url: import.meta.env.VITE_GRAPHQL_URL,
//   exchanges: [cacheExchange, fetchExchange],
// });

// app.mount('#app');


// main.ts
// import { createApp } from 'vue';
// import App from '@/App.vue';
// import router from '@/components/router.ts';

// const app = createApp(App);

// app.use(router);

// app.mount('#app');

// *updated
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import { createClient } from "@urql/vue";
import Provider from "@urql/vue"; // Correct default export for Provider
import router from '@/components/router.ts';
const { HASURA_GRAPHQL_ADMIN_SECRET, VITE_GRAPHQL_URL } = import.meta.env;


const urqlClient = createClient({
    url: VITE_GRAPHQL_URL,
    fetchOptions: {
        headers: {
            "x-hasura-admin-secret": HASURA_GRAPHQL_ADMIN_SECRET,
        },
    },
    exchanges: []
});

const app = createApp(App);

app.use(router);
// Provide the urql client to your Vue app
app.use(Provider, urqlClient);

app.mount("#app");