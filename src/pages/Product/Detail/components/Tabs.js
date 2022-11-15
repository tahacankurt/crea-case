import { useDispatch } from 'react-redux';
import React, { memo, useState } from 'react';
import { getCommentsRequest } from '../redux/productDetailState';
import CommentWrapper from './Comment';

// eslint-disable-next-line react/prop-types
function Tabs({ productId }) {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('TECHNICAL_SPECIFICATIONS');
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
          title="Comments"
          id="COMMENTS"
          activeTab={activeTab}
          onClick={() => dispatch(getCommentsRequest({ productId }))}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* Tab content */}
      <div>
        <TabItem id="TECHNICAL_SPECIFICATIONS" activeTab={activeTab}>
          <h1>Technical Specifications</h1>
        </TabItem>
        <TabItem id="COMMENTS" activeTab={activeTab}>
          <CommentWrapper productId={productId} />
        </TabItem>
      </div>
    </div>
  );
}

function TabNav({
  // eslint-disable-next-line react/prop-types
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

// eslint-disable-next-line react/prop-types
function TabItem({ id, activeTab, children }) {
  return activeTab === id ? <div className="TabContent">{children}</div> : null;
}

export default memo(Tabs);
