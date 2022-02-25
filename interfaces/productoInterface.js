// Example usage:
//
// import { MyShape } from ./myShape.js;
//
// class MyComponent extends React.Component {
//   //
// }
//
// MyComponent.propTypes = {
//   input: MyShape
// };

import PropTypes from "prop-types";

let _ProductoInterface;
_ProductoInterface = PropTypes.shape({
    "id": PropTypes.string,
    "nombre": PropTypes.string,
    "precio": PropTypes.number,
    "image": PropTypes.string,
});

export const ProductoInterface = PropTypes.arrayOf(_ProductoInterface);
