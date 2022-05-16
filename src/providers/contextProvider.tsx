/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useContext, useMemo } from 'react';
import { UserModel } from './models/UserModel';

type ContextType = {
    user: UserModel,
    setUser: Function,
}

export const Context = createContext({} as ContextType);

export function ContextProvider({ children }: any) {
    const [user, setUser] = useState<UserModel>(new UserModel())

    const value = useMemo(() => ({
        user, setUser
    }), [user]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider = () => useContext(Context);