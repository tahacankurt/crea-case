import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import StarRater from '../StarRater';
import { calculateAverageRate } from '../../utils';

export default function CommentList() {
  const isCommentsLoading = useSelector((state) => state.product.detail.comment.isLoading);
  const comments = useSelector((state) => state.product.detail.comment.payload);

  const memoizedCalculateRate = useCallback(() => calculateAverageRate(comments), [comments]);

  return (
    <div className="h-96 overflow-scroll mt-5">
      {isCommentsLoading ? 'Loading...'
        : (
          <ul>
            <div className="grid grid-cols-2 mb-5">
              <div className="grid grid-cols-2">
                <div>
                  Avarage Rate:
                </div>
                <div>
                  <StarRater rate={memoizedCalculateRate()} disabled />
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-right">
                  Total Comment Count:
                  {' '}
                  {comments.length}
                </p>
              </div>
            </div>
            <hr />

            {comments.map((comment) => (<CommentItem comment={comment} key={comment.id} />))}
          </ul>
        )}
    </div>
  );
}

function CommentItem({ comment }) {
  return (
    <li
      className="py-2 px-2 rounded-xl my-3 bg-gray-200"
      key={comment.id}
    >
      <div className="grid grid-cols-2 px-3">
        <div>
          <StarRater rate={comment.rate} disabled />
        </div>
        <div className="text-right text-gray-400">
          {dayjs(comment.date).format('MM.DD.YYYY hh:mm')}
        </div>
      </div>
      <p className="pl-5 mt-3 pr-3 mb-3 text-gray-500">
        {comment.body}
      </p>

    </li>
  );
}
