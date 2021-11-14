import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import { auth } from '../firebase.js'


const AuthContext = createContext({
    currentUser : null,
    signInWithGoogle: () => Promise,
    login: () => Promise,
    signup: () => Promise,
    logout: () => Promise,
    
})

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(false)
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
                setCurrentUser(user ? user : null)
                setLoading(false)

        })
        return () => { unsubscribe() }
    }, [])
    
    function signup (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function login (email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout () {
        return signOut(auth)
    }
    
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
      }

    const value = {
        currentUser,
        signInWithGoogle,
        login,
        signup,
        logout
    }

    return ( 
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
     );
}
