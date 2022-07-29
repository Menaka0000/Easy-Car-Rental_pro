import {createContext} from "react";
import React from 'react'

const userStateContext = createContext();

export function UserStateProvider({children}) {
    const [userState, setUserState] = React.useState({
        user: {
            loginStatus: 'signOut',
            reservedVehicle: {

            }
        }
    });
    const setState = (status) => {
        setUserState(prevState => ({...prevState, loginStatus: status}))
    }
    return (
        <userStateContext.Provider value={{userState, setState}}>{children}</userStateContext.Provider>
    )
}

export default userStateContext;