import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getCommentsRequest, getProductRequest, resetDetailState, resetPageState} from "./redux/productDetailState";
import dayjs from "dayjs";
import {Tabs} from "./components/Tabs";

const ProductDetail = () => {
    const dispatch = useDispatch();
    let {productId} = useParams();

    const isProductDetailLoading = useSelector(state => state.product.detail.isLoading)
    const productDetail = useSelector(state => state.product.detail.payload)

    useEffect(() => {
        dispatch(getProductRequest({productId}));
        return () => {
            dispatch(resetPageState())
        }
    }, [dispatch, productId])

    return (
        <div className="grid grid-cols-2 gap-16 my-8">
            {isProductDetailLoading ? 'Loading...' :
                <>
                    <div>
                        <img src={productDetail.cdnUrl} alt="" className={'w-full'}/>
                    </div>
                    <div>
                        <h1 className={'text-5xl'}>{productDetail.title}</h1>
                        <h1 className={'text-right mt-2'}>
                            Arival Date: {dayjs("2022-04-22 10:34").format('MM.DD.YYYY')}
                        </h1>
                        <p className={'text-base mt-8 text-justify'}> {productDetail.description}</p>
                        <h1 className={'text-5xl text-right mt-8'}>{productDetail.price} {productDetail.currency}</h1>
                        <Tabs productId={productId}/>
                    </div>
                </>
            }
        </div>
    )
}

export default ProductDetail;