import {createContext , useContext} from "react"

import useFetch from "../CoustomFetch"
const Appcontext = createContext()


const Appprovider = ({children}) => {

    const [data, loading] = useFetch("https://api.github.com/users/wycats/repos");

    return <Appcontext.Provider value={{name:"shreyas",data:data, loading:loading}}> {children} </Appcontext.Provider>
}


const ContextData = ()=> {
    return useContext(Appcontext)
}

export {
    Appcontext,
    Appprovider,
    ContextData
}