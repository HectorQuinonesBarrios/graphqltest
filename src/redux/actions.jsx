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

export const getMetrics = () => (
  async dispatch => {
    const metrics = await client
      .query({
        query: gql`
          query {
            getMetrics
          }
        `,
      });
    dispatch({
      type: ACTIONS.GET_METRICS,
      state: metrics.data.getMetrics,
    });
  });

export const setMetric = async (state) => ({
  type: ACTIONS.SET_METRICS,
  state,
});
