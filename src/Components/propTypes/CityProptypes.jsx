import PropTypes from 'prop-types';

const cityPropType = {
    country_name: PropTypes.string.isRequired,
    city_name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    nb_visited: PropTypes.number.isRequired,
    last_visited: PropTypes.number.isRequired,
}

export default cityPropType;