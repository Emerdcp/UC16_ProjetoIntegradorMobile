import { api } from "./api";

/* =====================================================
   CATEGORIA DE ATENDIMENTO
===================================================== */

export interface CategoriaAtendimento {
    id: number;
    ca_descricao: string;
    ca_ordem?: number;
    st_registro?: "A" | "I";
}

/* =====================================================
   LISTAR CATEGORIAS
===================================================== */

export async function getCategoriasAtendimento(
    search = ""
) {
    const response =
        await api.get(
            "/categoria-atendimento",
            {
                params: {
                    search,
                },
            }
        );
    return response.data;
}

/* =====================================================
   BUSCAR POR ID
===================================================== */

export async function getCategoriaAtendimentoById(
    id: number
) {
    const response =
        await api.get(
            `/categoria-atendimento/${id}`
        );
    return response.data;
}