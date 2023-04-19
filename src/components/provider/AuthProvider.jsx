import React, { useEffect, useState } from 'react';

import { createContext } from "react";
import App from "../../App";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //sign up
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //4 sign IN
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign OUT
    const logOut = () =>{
        return signOut(auth);

    }

    // user data after login
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
            setUser(currentUser)
            
        })

        return () =>{
            unsubscribe()
        }
    }, [])

    const authInfo ={
        user, 
        createUser,
        signIn,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;