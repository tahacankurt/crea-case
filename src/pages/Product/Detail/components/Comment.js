import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {createCommentRequest} from "../redux/productDetailState";

const CommentWrapper = ({productId}) => {
    const isCommentsLoading = useSelector(state => state.product.detail.comment.isLoading)
    const comments = useSelector(state => state.product.detail.comment.payload)
    return (
        <>
            <CreateCommentForm productId={productId}/>
            <div>
                {isCommentsLoading ? 'Loading...' :
                    <ul>
                        {comments.map((comment) => {
                            return <li className={'py-2 px-2 rounded-xl my-3 bg-gray-300'}
                                       key={comment.id}>
                                {comment.id} - {comment.body}
                            </li>;
                        })}
                    </ul>
                }
            </div>
        </>
    )
}

const CreateCommentForm = ({productId}) => {
    const dispatch = useDispatch();
    const isCommentsLoading = useSelector(state => state.product.detail.comment.isLoading)
    const [comment, setComment] = useState('');

    return (
        <div>
            <textarea disabled={isCommentsLoading}
                      rows={2}
                      value={comment}
                      className={'w-full rounded border-gray-400 resize-none'}
                      onChange={(e) => {
                          setComment(e.target.value)
                      }}/>

            <button disabled={isCommentsLoading} className={'primary:tf-btn'}
                    onClick={() => {
                        if (comment.length) {
                            dispatch(createCommentRequest({body: comment,productId}))
                            setComment('');
                        }
                    }}>
                Send
            </button>
        </div>
    )
}

export default CommentWrapper;