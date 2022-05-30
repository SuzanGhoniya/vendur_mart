import React, { Component } from "react";

export default class Scart extends Component {
  render() {
    return (
      <div>
        <div className="text-center display-4 min-vh-100">Cart</div>
        <div class="snipcart-summary">
          <a href="#" class="snipcart-user-email snipcart-user-profile">
            Customer dashboard
          </a>
        </div>
        <div>Lots of content</div>
        <div class="snipcart-summary">
          Number of items: <span class="snipcart-total-items"></span>
          Total price: <span class="snipcart-total-price"></span>
        </div>
      </div>
    );
  }
}
