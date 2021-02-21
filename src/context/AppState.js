import React, { useContext, useReducer } from 'react'
import AppContext from './AppContext';
import appReducer from './appReducer'

const init=()=>{

}

const AppState = (props) => {

    const [state,dispatch]=useReducer(appReducer,{},init);
    return (
        <AppContext.Provider value={{

        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
