import {makeVar, InMemoryCache} from '@apollo/client';

export const token = makeVar({token: null});
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        token: {
          read() {
            return token();
          },
        },
      },
    },
  },
});
