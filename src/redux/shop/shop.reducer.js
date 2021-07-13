import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = SHOP_DATA, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;