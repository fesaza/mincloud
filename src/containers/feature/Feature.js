import { connect } from 'react-redux';
import { requestConfigFeature } from '../../actions/ConfigActions';
import FeaturePage from '../feature/FeaturePage';

function mapStateToProps(state) {
  const { config } = state;
  return {
    ...config,
  };
}

const mapDispatchToProps = dispatch => ({
  load: configurationId => dispatch(requestConfigFeature(configurationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturePage);

