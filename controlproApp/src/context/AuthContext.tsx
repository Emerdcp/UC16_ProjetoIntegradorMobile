import { createContext, useContext, useState, ReactNode } from "react";

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

    async function signIn(
        usuario: string,
        senha: string
    ): Promise<boolean> {
        console.log("Login:", usuario, senha);

        return true;
    }

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

function useAuth() {

    return useContext(AuthContext);

}