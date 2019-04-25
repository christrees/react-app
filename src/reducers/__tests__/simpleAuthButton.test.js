import simpleAuthButtonReducer from '../simpleAuthButton';
import { changeAuth, CHANGE_AUTH } from '../../actions';


it ('handles actions set true through function changeAuth', () => {
    const newState = changeAuth(true);
    expect(newState.payload).toEqual(true);
    expect(newState.type).toEqual("change_auth");
});

it ('handles actions set false through function changeAuth', () => {
    const newState = changeAuth(false);
    expect(newState.payload).toEqual(false);
    expect(newState.type).toEqual("change_auth");
});

it ('check the simpleAuthButton switch true statement directly', () => {
    const action = {
        type: "change_auth",
        payload: true
    };
    const newState = simpleAuthButtonReducer(null, action);
    expect(newState).toEqual(true);
});

it ('check the simpleAuthButton switch false statement directly', () => {
    const action = {
        type: "change_auth",
        payload: false
    };
    const newState = simpleAuthButtonReducer(null, action);
    expect(newState).toEqual(false);
});

/* The code below does not increase coverage */
it ('handles actions of type CHANGE_AUTH false set', () => {
    const action = {
        type: CHANGE_AUTH,
        payload: true
    };
    const newState = simpleAuthButtonReducer(changeAuth(false), action);
    expect(newState.payload).toEqual(false);
});

it ('can pass whatever along', () => {
    const action = {};
    const defaultState = simpleAuthButtonReducer(["Whatever"], action);
    expect(defaultState).toEqual(["Whatever"]);
});


it ('handles actions of type unknown', () => {
    const newState = simpleAuthButtonReducer(["Whatever"], { type: 'SOMEUNKNOWNTYPE'});
    expect(newState).toEqual(["Whatever"]);
});
