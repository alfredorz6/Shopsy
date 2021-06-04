import * as ApiUtil from '../util/store_api_util';

export const RECEIVE_STORE = 'RECEIVE_STORE'
export const RECEIVE_ALL_STORES = 'RECEIVE_ALL_STORES';
export const RECEIVE_STORE_ERRORS = 'RECEIVE_STORE_ERRRORS';

const receiveStores = stores => ({
    type: RECEIVE_ALL_STORES,
    stores
})

const receiveStore = store => ({
    type: RECEIVE_STORE,
    store
})

const receiveStoreErrors = errors => ({
    type: RECEIVE_STORE_ERRORS,
    errors
})

export const fetchStores = () => dispatch => (
    ApiUtil.fetchStores().then(stores => dispatch(receiveStores(stores)))
)

export const fetchStore = (storeId) => dispatch => (
    ApiUtil.fetchStore(storeId).then(store => dispatch(receiveStore(store)))
)

export const createStore = (store) => dispatch => (
    ApiUtil.createStore(store).then(store => dispatch(receiveStore(store))
    ), err => (dispatch(receiveStoreErrors(err.responseJSON)))
)

export const updateStore = (store) => dispatch => (
    ApiUtil.updateStore(store).then(store => dispatch(receiveStore(store))
    ), err => (dispatch(receiveStoreErrors(err.responseJSON)))
)