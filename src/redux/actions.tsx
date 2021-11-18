import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  // useQuery,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
  cache: new InMemoryCache(),
});

export const ACTIONS = {
  GET_METRICS: 'GET_METRICS',
  SET_METRICS: 'SET_METRICS',
};

export const getMetrics = async () => {
  const metrics = await client
    .query({
      query: gql`
        query {
          getMetrics
        }
      `,
    });
  return {
    type: ACTIONS.GET_METRICS,
    state: metrics,
  };
};

export const setMetric = async (state: string) => ({
  type: ACTIONS.SET_METRICS,
  state,
});
