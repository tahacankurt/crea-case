import { useEffect } from 'react';
import React, { useDispatch, useSelector } from 'react-redux';
import ListCard from './components/ListCard';
import { getProductsRequest, resetState } from './redux/productListState';

function ProductList() {
  const dispatch = useDispatch();
  const isProductsLoading = useSelector((state) => state.product.list.isLoading);
  const products = useSelector((state) => state.product.list.payload);

  useEffect(() => {
    dispatch(getProductsRequest());
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* TODO: Skeleton Loader */}
        {isProductsLoading ? 'Loading...' : products.map((product) => <ListCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default ProductList;
