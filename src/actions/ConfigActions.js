export const REQUEST_CONFIG_FEATURE = 'REQUEST_CONFIG_FEATURE';
export const RECEIVE_CONFIG_FEATURE = 'RECEIVE_CONFIG_FEATURE';

const requestConfigFeature = featureId => (
  {
    type: REQUEST_CONFIG_FEATURE,
    featureId,
  }
);

const receiveConfigFeature = (configuration, featureId) => (
  {
    type: RECEIVE_CONFIG_FEATURE,
    configuration,
    featureId,
  }
);

export {
  requestConfigFeature,
  receiveConfigFeature,
};

