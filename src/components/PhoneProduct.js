import React from 'react';
import Phone from './Phone';

class PhoneProduct extends React.Component {
  constructor(props) {
    super(props);
    this.phoneModel = ['iPhone11', 'iPhoneXS', 'iPhoneSE'];
    this.phoneModel = [
      { model: 'iPhone11', price: 5999 },
      { model: 'iPhoneXS', price: 5399 },
      { model: 'iPhoneSE', price: 3599 },
    ];
  }

  render() {
    return (
      <section className="phone-product">
        <h2>iPhone</h2>
        <article>
          {this.phoneModel.map((phone) => (
            <Phone id={phone.model} key={phone.model} price={phone.price} />
          ))}
        </article>
      </section>
    );
  }
}
export default PhoneProduct;
