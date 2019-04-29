import {INSTANCE} from '../constants/action-type'
import {apiCall} from '../utils/api-call'

export const fetchInstancesRequest = () => {
	return async dispatch => {
		try {
			// const token = 'Bearer '.concat(localStorage.getItem('token'));
			// const token = localStorage.getItem('token');
			// dispatch(loading)
			let fetchInstances = await apiCall('/sinhvien/api', 'GET', null);
			if (!fetchInstances.data.error) {
				// console.log(fetchInstances.data.data);
				dispatch(fetchIntancesSuccess(fetchInstances.data));
			} else {
				// console.log(fetchInstances.data);
				dispatch(fetchInstanceFailure('cannot get data from headers!'));
			}

		} catch (error) {
			dispatch(fetchInstanceFailure('cannot get data from headers!'));
		}
	}
}
// export const loading=()=>{
// 		return  {
// 			type: INSTANCE.LOADING_POST
			
// 		}
// }
export const fetchIntancesSuccess = instances => {
	// console.log(instances)
	return {
		type: INSTANCE.FETCH_INSTANCE_SUCCESS,
		payload: instances
	}
}

export const fetchInstanceFailure = message => {
	return {
		type: INSTANCE.FETCH_INSTANCE_FAILURE,
		message
	}
}



export const fetchNewInstanceRequest = () => {
	return async dispatch => {
		try {
			// const token = localStorage.getItem('token');
			let fetchInstances = await apiCall('/sinhvien/api/add', 'POST', null);

			if (!fetchInstances.data.error) {
				dispatch(fetchNewInstance(fetchInstances.data));
				dispatch(fetchInstancesRequest());
			} else {
				// console.log('fetchNewInstanceFailure')
				dispatch(fetchNewInstanceFailure());
			}

		} catch (error) {
			dispatch(fetchNewInstanceFailure());
		}
	}
}

export const fetchNewInstance = newInstance => {
	return {
		type: INSTANCE.FETCH_NEW_INSTANCE_SUCCESS,
		payload: newInstance,
		message: 'Thêm instance thành công!'
	}
}

export const fetchNewInstanceFailure = () => {
	return {
		type: INSTANCE.FETCH_NEW_INSTANCE_FAILURE,
		message: 'Số lượng instance của bạn đã tạo tối đa!'
	}
}

export const getInstanceByIDRequest = _id => {
	return async dispatch => {
		try {
			// const token = localStorage.getItem('token');
			let getInstance = await apiCall(`/sinhvien/api/${_id}`, 'GET', null);
			if (!getInstance.data.error) {
				dispatch(getInstanceByID(getInstance.data));
				// history.push(`/dashboard/instance/${_id}`, { instance: getInstance.data.data });
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const getInstanceByID = instance => {
	return {
		type: INSTANCE.DETAIL_INSTANCE,
		payload: instance
	}
}

export const actAddProductRequest = (tenSinhVien) => {
    return dispatch => {
        return apiCall('/sinhvien/api/add', 'POST', tenSinhVien).then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actAddProduct = (tenSinhVien) => {
    return {
        type : INSTANCE.ADD_SINHVIEN,
        tenSinhVien
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return apiCall(`/sinhvien/api/delete/${id}`, 'GET', null).then(res =>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type : INSTANCE.DELETE_PRODUCT,
        id
    }
}

export const changeStatusRequest = (idInstance, data) => {
	return async dispatch => {
		try {
			// const token = localStorage.getItem('token');
			let res = await apiCall(`/sinhvien/api/put/${idInstance}`, 'POST', data)

			if (!res.data.error) {
				dispatch(changeStatus(res.data))
			}
		} catch (error) {
			console.log({ error });
		}
	}
}

export const changeStatus = instance => {
	return {
		type: INSTANCE.CHANGE_PASSWORD,
		payload: instance,
		message: 'Thay đổi Status thành công!'
	}
}