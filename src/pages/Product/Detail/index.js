import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { getCommentsRequest, getProductRequest, resetPageState } from './redux/productDetailState';
import Tabs from './components/Tabs';
import StarRater from './components/StarRater';
import { calculateAverageRate } from './utils';

function ProductDetail() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const comments = useSelector((state) => state.product.detail.comment.payload);
  const memoizedCalculateRate = useCallback(() => calculateAverageRate(comments), [comments]);

  const isProductDetailLoading = useSelector((state) => state.product.detail.isLoading);
  const productDetail = useSelector((state) => state.product.detail.payload);

  useEffect(() => {
    dispatch(getProductRequest({ productId }));
    dispatch(getCommentsRequest({ productId }));
    return () => {
      dispatch(resetPageState());
    };
  }, [dispatch, productId]);

  return (
    <div className="grid grid-cols-2 gap-16 my-8">
      {isProductDetailLoading ? 'Loading...' : (
        <>
          <div>
            <img src={productDetail.cdnUrl} alt="" className="w-full" />
          </div>
          <div>
            <h1 className="text-5xl">{productDetail.title}</h1>
            <div className="grid grid-cols-2 gap-16 my-8">
              <div>
                <StarRater
                  rate={memoizedCalculateRate()}
                  disabled
                />
              </div>
              <div>
                <p className="text-right mt-2">
                  Arival Date:
                  {' '}
                  {dayjs(productDetail.arivalDate).format('MM.DD.YYYY')}
                </p>
              </div>
            </div>

            <p className="text-base mt-8 text-justify">
              {productDetail.description}
            </p>
            <h1 className="text-5xl text-right mt-8">
              {productDetail.price}
              {' '}
              {productDetail.currency}
            </h1>
            <Tabs productId={productId} />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
