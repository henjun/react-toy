import { fromJS } from 'immutable';

import {
    TOGGLE_CHECK
} from './constants';

//immutable js를 사용하게 되면 항상 새로운 객체를 만들어서 리턴하기 때문에
//리액트에서 상태 변화를 일으킬 수 있게 도와 준다. 

const initState = fromJS({
    checked: false
});

function appReducer(state = initState, action){
    switch(action.type){
        case TOGGLE_CHECK: 
            return state.set('checked', action.checked)
        default: 
            return state;
    }
}

export default appReducer;