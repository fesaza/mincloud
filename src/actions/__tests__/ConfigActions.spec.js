import * as configActions from '../ConfigActions';

describe('config actions', () => {
  const featureId = 'membersGrid';
  it('should create an action to request a config', () => {
    const expectedRequestFeature = {
      type: configActions.REQUEST_CONFIG_FEATURE,
      featureId,
    };
    expect(configActions.requestConfigFeature(featureId)).toEqual(expectedRequestFeature);
  });

  it('should create an action to receive a config', () => {
    const configuration = {};
    const expectedRequestFeature = {
      type: configActions.RECEIVE_CONFIG_FEATURE,
      configuration,
      featureId,
    };
    expect(configActions.receiveConfigFeature(configuration, featureId)).toEqual(expectedRequestFeature);
  });
});
