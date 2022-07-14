import React from 'react'
import useProvideAuth from '../../hooks/useProvideAuth'
import AuthContext from './AuthContext'

const AuthState = ({children}) => {
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState
