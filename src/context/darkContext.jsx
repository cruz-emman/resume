import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider =({children}) =>{
    const [active,setActive] = useState(false)

    const handleClick = (e) => setActive((prev) => !prev)

    return(
        <StateContext.Provider value={{active,setActive, handleClick}}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);
