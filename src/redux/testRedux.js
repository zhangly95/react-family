import {increment,decrement,reset} from '../redux/actions/counter';

import store from './store';

//initial state
console.log(store.getState());

//注销监听
let unsubcribe = store.subscribe(()=>{
    console.log(store.getState())
})

//diapatch action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

unsubcribe();

