import React from 'react';

function BrandShopBlock() {
  return (
    <div className="brand-shop-block">
      <h2>Brand/Shop</h2>
      <p>Businesses that advertise their products or services.</p>
      <button onClick={() => console.log("Selected: BrandShop")}>Select</button>
    </div>
  );
}

export default BrandShopBlock;
