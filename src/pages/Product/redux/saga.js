import {fork} from 'redux-saga/effects'

import productListRootSaga from "../List/redux/productListSaga";
import productDetailRootSaga from "../Detail/redux/productDetailSaga";

export default function* productRootSaga() {
    yield [
        fork(productListRootSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(productDetailRootSaga),
    ];
}
