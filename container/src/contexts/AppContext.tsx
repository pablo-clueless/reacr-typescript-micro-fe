import React, { FC, ReactNode, createContext, useContext, useState } from 'react'

const AppContext = createContext<any | null>(null)

interface Props { children: ReactNode }

// const initialState = {  }

export const AppProvider:FC<Props> = ({children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSidebar = () => {
        setIsOpen(prev => !prev)
    }

    const values = {isOpen, toggleSidebar}
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)