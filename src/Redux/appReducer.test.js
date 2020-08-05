import React from 'react';
import { appReducer } from './appReducer'
import { showAlert, showLoader } from './action'
import { SHOW_ALERT } from './type'

const initialState = {
    loading: false,
    alert: null
}

it('alert should appear', () => {
    // 1. given
    let action =
    {
        type: SHOW_ALERT,
        payload: 'test'
    }
    //2. when
    let newstate = appReducer(initialState, action);
    //3. then
    expect(newstate.alert).toBe('test');
})

it('loadint is false', () => {
    // 1. get data
    let action =
    {
        type: SHOW_ALERT,
        payload: 'test'
    }
    //2. action
    let newstate = appReducer(initialState, action);
    //3. expectation
    expect(newstate.loading).toBe(false);
})

it('loadint is true', () => {
    // 1. get data
    let action = showLoader();
    //2. action
    let newstate = appReducer(initialState, action);
    //3. expectation
    expect(newstate.loading).toBe(true);
})
