import { api } from "./api";

/* =====================================================
   TIPO DE ATENDIMENTO
===================================================== */

export interface TipoAtendimento {
    id: number;
    ta_descricao: string;
    ta_ordem?: number;
    st_registro?: "A" | "I";
}

/* =====================================================
   LISTAR TIPOS
===================================================== */

export async function getTiposAtendimento(
    search = ""
) {

    const response =
        await api.get(
            "/tipo-atendimento",
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
export async function getTipoAtendimentoById(
    id: number
) {
    const response =
        await api.get(
            `/tipo-atendimento/${id}`
        );
    return response.data;
}