import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import StarRater from '../StarRater';
import { createCommentRequest } from '../../redux/productDetailState';
import { calculateAverageRate } from '../../utils';

export default function CommentForm({ productId }) {
  const dispatch = useDispatch();
  const isCommentsLoading = useSelector((state) => state.product.detail.comment.isLoading);
  const [body, setBody] = useState('');
  const [rate, setRate] = useState(0);
  return (
    <div>
      <div className="text-right my-3">
        <StarRater rate={rate} setRate={setRate} disabled={isCommentsLoading} />
      </div>

      <textarea
        disabled={isCommentsLoading}
        rows={2}
        value={body}
        className="w-full rounded border-gray-400 resize-none"
        onChange={(e) => { setBody(e.target.value); }}
      />

      <button
        type="button"
        disabled={isCommentsLoading}
        className="primary:tf-btn"
        onClick={() => {
          if (body.length && rate) {
            dispatch(createCommentRequest({
              commentDetail: { body, rate, date: Date.now() }, productId,
            }));
            setBody('');
            setRate(0);
            return true;
          }
          // TODO: Error label
          alert('You must enter at least one char and rate');
          return false;
        }}
      >
        {isCommentsLoading ? 'Loading...' : 'Send'}
      </button>
    </div>
  );
}
