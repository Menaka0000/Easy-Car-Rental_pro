import {createContext} from "react";
import React from 'react'

const userStateContext = createContext();

export function UserStateProvider({children}) {
    const [userState, setUserState] = React.useState({
        user: {
            loginStatus: 'signOut',
            user:{},
            vehicles: {

            }
        }
    });
    const setState = (status) => {
        console.log(status)
        setUserState(prevState => ({
            user:{
                ...prevState.user,
                ...status,
                vehicles: {

                }
            }
        }))
    }
    return (
        <userStateContext.Provider value={{userState, setState}}>{children}</userStateContext.Provider>
    )
}

export default userStateContext;