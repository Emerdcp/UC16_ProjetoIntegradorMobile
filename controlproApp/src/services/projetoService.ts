import { api } from "./api";

/* =====================================================
   PROJETO
===================================================== */

export interface Projeto {
    id: number;
    pj_codigo: string;
    pj_descresumo?: string;
    pj_tipo?: string;
    pj_controle?: string;
    pj_status?: string;
    pj_data?: string;
    cli_fantasia?: string;
    sis_sigla?: string;
    usu_nome?: string;
}

/* =====================================================
   LISTAR PROJETOS
===================================================== */

export async function getProjetos(
    clienteId?: number,
    search = ""
) {
    const response =
        await api.get(
            "/projeto",
            {
                params: {
                    cliente_id:
                        clienteId || "",
                    search,
                    page: 1,
                    limit: 100,
                },
            }
        );
    return response.data;
}

/* =====================================================
   BUSCAR PROJETO
===================================================== */

export async function getProjetoById(
    id: number
) {
    const response =
        await api.get(
            `/projeto/${id}`
        );
    return response.data;
}