import {CHANGE_THEME, changeTheme,CHANGE_LOCALE,CHANGE_THEMEDATA} from '@/functions';
// import { useContext} from 'react';

import { useStore } from 'react-redux'
// import store from 'store';
// import { ThemeName } from '../types';

// type State = ThemeName;
// type Action =
// | ReturnType<typeof changeTheme>
// | { type: 'OTHER_ACTION'; payload?: any };
let them=(localStorage.getItem('theme'));
const themeReducer = (
    previousState = them || 'light',
    action
) => {
    // const { store } = useContext(ReactReduxContext);
    console.log('themeReducer...')
    if (action.type === CHANGE_THEME) {
        console.log('action',action);

        console.log('action.payload',action.payload);
        console.log('previousState', previousState, action);


        return action.payload;
    }

    return previousState;
};

export default themeReducer;