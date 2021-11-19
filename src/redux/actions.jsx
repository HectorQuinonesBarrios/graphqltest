import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  // useQuery,
  gql,
} from '@apollo/client';
import store from './store';
import { ACTIONS } from './reducer';

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
  cache: new InMemoryCache(),
});

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
      payload: metrics.data.getMetrics,
    });
  });

export const setMetric = (state) => (
  dispatch => dispatch({
    type: ACTIONS.SET_METRICS,
    payload: state,
  })
);

export const setDates = (state) => (
  dispatch => dispatch({
    type: ACTIONS.SET_DATES,
    payload: state,
  })
);

export const getInfo = () => (
  async dispatch => {
    const copyStore = store.getState();
    if (!copyStore.dates[1]) {
      dispatch({
        type: ACTIONS.GET_INFO,
        payload: [],
      });
    }
    if (copyStore.dates[1]) {
      const info = await client
        .query({
          query: gql`
            query {
              getMeasurements(input:{
                metricName: "${copyStore.selectMetric}",
                after: ${copyStore.dates[0].unix()},
                before: ${copyStore.dates[1].unix()}
              }) {
                value,
                at,
                unit
              }
            }
          `,
        });
      dispatch({
        type: ACTIONS.GET_INFO,
        payload: info.data.getMeasurements,
      });
    }
  });
