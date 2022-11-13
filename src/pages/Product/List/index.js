import ListCard from "./components/ListCard";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsRequest} from "./redux/productListState";


const ProductList = () => {
    const dispatch = useDispatch();
    const isProductsLoading = useSelector(state => state.productList.isLoading)
    const products = useSelector(state => state.productList.payload)

    useEffect(() => {
        dispatch(getProductsRequest())
    }, [dispatch])

    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {/*TODO: Skeleton Loader*/}
                {isProductsLoading ? 'Loading...' : products.map((product) => <ListCard key={product.id} product={product} />)}
            </div>
        </div>
    )
}

export default ProductList;