import {getCommentsRequest} from "../redux/productDetailState";
import {useDispatch} from "react-redux";
import {useState} from "react";
import CommentWrapper from "./Comment";

export const Tabs = ({productId}) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div>
            <div className={'grid grid-cols-2 gap-0 my-8 text-white '}>
                <TabNav title={'Technical Specifications'}
                        id={'TECHNICAL_SPECIFICATIONS'}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}/>

                <TabNav title={'Comments'}
                        id={'COMMENTS'}
                        activeTab={activeTab}
                        onClick={() => dispatch(getCommentsRequest({productId}))}
                        setActiveTab={setActiveTab}/>
            </div>
            {/*Tab content*/}
            <div>
                <TabItem id="TECHNICAL_SPECIFICATIONS" activeTab={activeTab}>
                    <h1>test</h1>
                </TabItem>
                <TabItem id="COMMENTS" activeTab={activeTab}>
                    <CommentWrapper productId={productId}/>
                </TabItem>
            </div>
        </div>


    )
}

const TabNav = ({id, title, activeTab, setActiveTab, onClick}) => {
    const handleClick = () => {
        setActiveTab(id);
        if (onClick){
            onClick.call();
        }
    };

    return (
        <button
            className={`${activeTab === id ? 'bg-gray-300' : 'bg-gray-400'} text-center py-3`}
            onClick={handleClick}
            disabled={activeTab === id}
        >
            {title}
        </button>
    );
};

const TabItem = ({id, activeTab, children}) => (activeTab === id ? <div className="TabContent">{children}</div> : null);