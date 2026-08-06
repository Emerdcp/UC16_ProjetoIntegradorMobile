import { api } from "./api";

export interface LoginRequest{
    usuario:string;
    senha:string;
}

export async function login(
    dados:LoginRequest
){
    const response = await api.post(
        "/login",
        dados
    );

    return response.data;
}