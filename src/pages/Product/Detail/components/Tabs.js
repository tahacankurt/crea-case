import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useState } from 'react';
import { getCommentsRequest } from '../redux/productDetailState';
import TechnicalSpecification from './TechnicalSpecification';
import CommentForm from './Comment/CommentForm';
import CommentList from './Comment/CommentList';

function Tabs({ productId }) {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('TECHNICAL_SPECIFICATIONS');
  const comments = useSelector((state) => state.product.detail.comment.payload);

  return (
    <div>
      <div className="grid grid-cols-2 gap-0 my-8 text-white ">
        <TabNav
          title="Technical Specifications"
          id="TECHNICAL_SPECIFICATIONS"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabNav
          title={`Comments (${comments.length})`}
          id="COMMENTS"
          activeTab={activeTab}
          onClick={() => dispatch(getCommentsRequest({ productId }))}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* Tab content */}
      <div>
        <TabItem id="TECHNICAL_SPECIFICATIONS" activeTab={activeTab}>
          <TechnicalSpecification />
        </TabItem>
        <TabItem id="COMMENTS" activeTab={activeTab}>
          <CommentForm productId={productId} />
          <CommentList productId={productId} />
        </TabItem>
      </div>
    </div>
  );
}

function TabNav({
  id, title, activeTab, setActiveTab, onClick,
}) {
  const handleClick = () => {
    setActiveTab(id);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`${activeTab === id ? 'bg-gray-300' : 'bg-gray-400'} text-center py-3`}
      onClick={handleClick}
      disabled={activeTab === id}
    >
      {title}
    </button>
  );
}

function TabItem({ id, activeTab, children }) {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
}

export default memo(Tabs);
