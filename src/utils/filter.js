/**
 * This filter is used to convert the Backend date to Local time and desired format.
 * @type {{momentLocal(*=): *}}
 */
const filters = {
  two_digits(value) {
    if (value.toString().length <= 1) {
      return `0${value.toString()}`;
    }
    return value.toString();
  }
};
export default filters;
