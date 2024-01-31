import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    
    switch(action.type){
        case "Red":
            return{...state, color: "red"}
        case "Blue":
            return{...state, color: "blue"}
        default: 
            return state
    }

}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"})

   

    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>
    )
}