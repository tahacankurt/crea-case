import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { createCommentRequest } from '../redux/productDetailState';

// eslint-disable-next-line react/prop-types
function CommentWrapper({ productId }) {
  const isCommentsLoading = useSelector((state) => state.product.detail.comment.isLoading);
  const comments = useSelector((state) => state.product.detail.comment.payload);
  return (
    <>
      <CreateCommentForm productId={productId} />
      <div className="h-48 overflow-scroll mt-5">
        {isCommentsLoading ? 'Loading...'
          : (
            <ul>
              {comments.map((comment) => (
                <li
                  className="py-2 px-2 rounded-xl my-3 bg-gray-300"
                  key={comment.id}
                >
                  {comment.id}
                  {' '}
                  -
                  {comment.body}
                </li>
              ))}
            </ul>
          )}
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function CreateCommentForm({ productId }) {
  const dispatch = useDispatch();
  const isCommentsLoading = useSelector((state) => state.product.detail.comment.isLoading);
  const [comment, setComment] = useState('');

  return (
    <div>
      <textarea
        disabled={isCommentsLoading}
        rows={2}
        value={comment}
        className="w-full rounded border-gray-400 resize-none"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />

      <button
        type="button"
        disabled={isCommentsLoading}
        className="primary:tf-btn"
        onClick={() => {
          if (comment.length) {
            dispatch(createCommentRequest({ body: comment, productId }));
            setComment('');
            return true;
          }
          // TODO: Error label
          alert('You must enter at least one char');
          return false;
        }}
      >
        {isCommentsLoading ? 'Loading...' : 'Send'}
      </button>
    </div>
  );
}

export default CommentWrapper;
