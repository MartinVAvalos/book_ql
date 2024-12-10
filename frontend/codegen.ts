// import { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   schema: 'http://localhost:5050/v1/graphql', // Replace with your Hasura GraphQL endpoint
//   documents: ['src/**/*.vue'],
//   ignoreNoDocuments: true, // for better experience with the watcher
//   generates: {
//     './src/gql/': {
//       preset: 'client',
//       config: {
//         useTypeImports: true,
//       },
//       plugins: [],
//     },
//   },
// };

// export default config;

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://graphql-engine:8080/v1/graphql', // Use the Docker service name and port
  documents: ['src/**/*.vue'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
  },
};

export default config;

