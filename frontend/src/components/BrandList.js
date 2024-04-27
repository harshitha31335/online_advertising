// BrandList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBrands } from './api'; 

function BrandList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getAllBrands();
      setBrands(data);
    };

    fetchBrands();
  }, []);

  return (
    <div>
      <h3>Brands</h3>
      <ul>
        {brands.map(brand => (
          <li key={brand.id}>
            <Link to={`/manager/brands/${brand.id}`}>{brand.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/manager/add-brand">Add Brand</Link>
    </div>
  );
}

export default BrandList;
