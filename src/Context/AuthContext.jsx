import React, { createContext, useState } from 'react'


export const AuthContext = createContext()
const AuthContextProvider = ({ children }) => {
    const [page, setPage] = useState(0)
    const[authUser,setAuthUser]=useState(JSON.parse(localStorage.getItem("Auth_data")) || null)
    const [selectedKeys, setSelectedKeys] = useState({});
    const[openKey,setOpenKeys]=useState([])
    const[selectOffice,setSelectOffice]=useState("")
    const[SelectProduct,setSelectProduct]=useState("")
    return (
        <AuthContext.Provider value={{page, setPage,authUser,setAuthUser,openKey,setOpenKeys,selectedKeys, setSelectedKeys,selectOffice,setSelectOffice,SelectProduct,setSelectProduct}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider 
