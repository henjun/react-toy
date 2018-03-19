// @flow

import {
    TOGGLE_CHECK
} from './constants';

export function toggleCheck(checked: boolean){
    return {
        type: TOGGLE_CHECK, 
        checked
    }
}