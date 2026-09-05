import { api } from "./api";

/* =====================================================
   SISTEMA
===================================================== */

export interface Sistema {
    id: number;
    sis_sigla?: string;
    sis_descricao?: string;
}

/* =====================================================
   LISTAR SISTEMAS
===================================================== */

export async function getSistemas(
    search = ""
) {
    const response =
        await api.get(
            "/sistema",
            {
                params: {
                    search,
                    page: 1,
                    limit: 100,
                },
            }
        );
    return response.data;
}

/* =====================================================
   BUSCAR SISTEMA POR ID
===================================================== */

export async function getSistemaById(
    id: number
) {
    const response =
        await api.get(
            `/sistema/${id}`
        );

    return response.data;
}