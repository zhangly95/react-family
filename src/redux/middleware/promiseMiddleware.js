import axios from 'axios';
import { GET_USER_INFO_SUCCESS } from '../actions/userInfo';

export default store => next =>action =>{
    const {dispatch, getState} = store;
    //diapatch 一个function,则不作处理，进入下一级
    if (typeof action === 'function'){
        action(dispatch,getState);
        return;
    }

    //解析action
    const {
        promise,
        types,
        afterSuccess,
        ...rest
    } = action;

    //没有Promise，证明不是发送ajax请求，就直接进入下一步
    if (!action.promise){
        return next(action);
    }

    //解析types
    const [REQUEST, SUCCESS, FAILURE] = types;

    next({
        ...rest,
        type:REQUEST
    });

    const onFulfilled = result =>{
        next({
            ...rest,
            result,
            type:SUCCESS
        });
        if(afterSuccess){
            afterSuccess(dispatch, getState, result)
        };
    }
     //failed
     const onRejected = error =>{
        next({
            ...rest,
            error,
            type: FAILURE
        });
    };

    return promise(axios).then(onFulfilled, onRejected).catch(error =>{
        console.error('MIDDLEWARE ERROR', error);
        onRejected(error)
    })
}