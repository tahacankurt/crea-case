import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ListCard({ product }) {
  return (
    <div className="group relative">
      <Link to={`/products/${product.id}`}>
        <div
          className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
        >
          <img
            alt={product.title}
            src={product.cdnUrl}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg text-gray-700">
              <span aria-hidden="true" className="absolute inset-0 " />
              {product.title}
            </h3>

          </div>
          <p className="text-md font-bold text-gray-900">
            {product.currency}
            {' '}
            {product.price}
          </p>
        </div>
      </Link>

    </div>
  );
}

export default ListCard;
