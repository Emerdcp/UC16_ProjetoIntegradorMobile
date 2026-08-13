import React, { createContext, useContext, useState, ReactNode } from "react";

import { User } from "@/types/User";

interface AuthContextData {
    user: User | null;
    token: string | null;
    loading: boolean;
    signIn: (usuario: string, senha: string) => Promise<boolean>;
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

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    /*
 * LOGIN LOCAL
 *
 * Temporariamente vamos utilizar
 * um usuário fictício.
 *
 * Depois substituiremos esta parte
 * pela chamada da API.
 */

    // async function signIn(
    //     usuario: string,
    //     senha: string
    // ): Promise<boolean> {
    //     console.log("Login:", usuario, senha);

    //     return true;
    // }

    async function signIn(
        usuario: string,
        senha: string
    ): Promise<boolean> {

        setLoading(true);

        try {

            if (
                usuario === "admin@controlpro.com" &&
                senha === "123456"
            ) {

                /*
                 * Usuário temporário.
                 *
                 * Depois virá da API.
                 */
                const usuarioLogado = {
                    id: 1,
                    nome: "Administrador",
                    email: usuario,
                } as User;

                setUser(usuarioLogado);

                setToken("token-local-controlpro");

                return true;
            }

            return false;

        } finally {

            setLoading(false);

        }
    }


    /*
    * LOGOUT
    */

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

/*
 * Hook de autenticação
 */
export function useAuth(): AuthContextData {

    return useContext(AuthContext);

}