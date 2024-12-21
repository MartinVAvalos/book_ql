import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'http://graphql-engine:8080/v1/graphql': {
      headers: {
        'x-hasura-admin-secret': 'vigilantmuse',
      },
    },
  },
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [
        'typescript-operations',
        'typescript-urql',
      ],
      presetConfig: {
        gqlTagName: 'graphql',
        fragmentMasking: false,
      },
      config: {
        documentMode: 'graphQLTag',
        useTypeImports: true,
        documentNodeImport: '@graphql-typed-document-node/core#TypedDocumentNode',
      },
    },
  },
};

export default config;

