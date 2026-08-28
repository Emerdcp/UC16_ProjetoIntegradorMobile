import { api } from "./api";

export interface LoginRequest {
    email: string;
    senha: string;
}

export interface LoginResponse {

    token: string;

    usuario: {
        id: number;
        nome: string;
        email: string;
        grupo_id: number;
    };

}

export async function login(
    dados: LoginRequest
): Promise<LoginResponse> {

    const response =
        await api.post<LoginResponse>(
            "/auth/login",
            dados
        );

    return response.data;
}