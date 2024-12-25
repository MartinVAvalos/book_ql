import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
import { GetUsersQuery, GetUsersQueryVariables } from './gql/api';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const GetUsersDocument = gql`
    query GetUsers {
  Users {
    id
    name
    email
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<never, GetUsersQueryVariables | undefined>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables | undefined>({ query: GetUsersDocument, variables: undefined, ...options });
};