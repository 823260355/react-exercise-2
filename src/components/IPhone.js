import React from 'react';
import PropTypes from 'prop-types';

class IPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <h3 className="model">{this.props.id}</h3>
        <img
          className="image-size"
          alt="product_image"
          src={'../assets/product_image_placeholder.png'}
        ></img>
        <dev className="phone-price">
          <p>{this.props.price}</p>
          <button>add to cart</button>
        </dev>
      </section>
    );
  }
}
IPhone.propTypes = {
  id: PropTypes.string,
  price: PropTypes.number,
};
export default IPhone;
