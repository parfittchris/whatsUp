import { connect } from 'react-redux';
import { updateWeather } from '../../actions/weatherActions';
import { logout } from '../../actions/sessionActions';

import weather from './weather';

const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateWeather: weather => dispatch(updateWeather(weather)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(weather);
