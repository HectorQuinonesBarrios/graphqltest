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
    const info = await client
      .query({
        query: gql`
          query {
            getMultipleMeasurements(input:{
              metricName: "${copyStore.selectMetric}"
            }) {
              metric,
              measurements { 
                value,
                at,
                unit
              },
            }
          }
        `,
      });
    dispatch({
      type: ACTIONS.GET_INFO,
      payload: info.data.getMultipleMeasurements[0].measurements,
    });
  });
