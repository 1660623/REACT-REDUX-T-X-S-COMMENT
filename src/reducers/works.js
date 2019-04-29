import {INSTANCE} from '../constants/action-type'

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}
const initialState =[];
const instancesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTANCE.FETCH_INSTANCE_SUCCESS:
            state = [...action.payload];
            return  [...state ];
            // return { loading: false, work: [...]}
        // case INSTANCE.LOADING_POST:
        //     return { ...state, loading: true}
        case INSTANCE.FETCH_INSTANCE_FAILURE:
            return { ...action };
        case INSTANCE.ADD_SINHVIEN:
            state.shift(action.tenSinhVien)
            return [...state];
        case INSTANCE.DELETE_PRODUCT:
          var  index = findIndex(state, action.id);
            state.splice(index, 1);
                return [...state];
        default: return [...state];
    }
}

export default instancesReducer;