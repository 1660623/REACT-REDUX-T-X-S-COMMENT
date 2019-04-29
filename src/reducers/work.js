import { INSTANCE } from '../constants/action-type';
import { showToast } from '../utils/config-toastr';

const initialState = [];



const instanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case INSTANCE.DETAIL_INSTANCE:
            return { ...action.payload };
        case INSTANCE.CHANGE_STATUS:
            showToast('info', action.message);
            return { ...state, ...action.payload };
        case INSTANCE.CHANGE_USER:
            showToast('info', action.message);
            return { ...state, ...action.payload };
        case INSTANCE.CHANGE_PASSWORD:
            showToast('info', action.message);
            return { ...state, ...action.payload };
         
            // state.push(action.tenSinhVien);
            
        
        default: return { ...state };
    }
}

export default instanceReducer;