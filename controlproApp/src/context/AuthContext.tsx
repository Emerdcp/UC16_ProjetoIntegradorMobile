import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
} from "react";

import { User } from "@/types/User";

import {
    login,
} from "@/services/authService";


interface AuthContextData {

    user: User | null;

    token: string | null;

    loading: boolean;

    signIn: (
        email: string,
        senha: string
    ) => Promise<boolean>;

    signOut: () => Promise<void>;

}


interface AuthProviderProps {
    children: ReactNode;
}


const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);


export function AuthProvider({
    children,
}: AuthProviderProps) {

    const [user, setUser] =
        useState<User | null>(null);

    const [token, setToken] =
        useState<string | null>(null);

    const [loading, setLoading] =
        useState(false);


    /* =====================================================
       LOGIN
    ===================================================== */

    async function signIn(
        email: string,
        senha: string
    ): Promise<boolean> {

        setLoading(true);

        try {

            const response =
                await login({
                    email,
                    senha,
                });


            if (!response?.token) {

                return false;

            }


            setToken(response.token);


            setUser(
                response.usuario as User
            );


            return true;

        } catch (error) {

            console.error(
                "Erro ao realizar login:",
                error
            );

            return false;

        } finally {

            setLoading(false);

        }

    }


    /* =====================================================
       LOGOUT
    ===================================================== */

    async function signOut(): Promise<void> {

        setUser(null);

        setToken(null);

    }


    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                signIn,
                signOut,
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}


/* =========================================================
   HOOK
========================================================= */

export function useAuth(): AuthContextData {

    return useContext(AuthContext);

}