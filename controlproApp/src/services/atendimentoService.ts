import { api } from "./api";


/* =====================================================
   TIPOS
===================================================== */

export type AtendimentoStatus =
    | "A"
    | "E"
    | "D"
    | "F"
    | "C";


export interface Atendimento {

    id: number;

    at_codigo: string;

    at_cliente_id: number;
    at_projeto_id?: number | null;
    at_sistema_id?: number | null;
    at_tipo_id: number;
    at_categoria_id: number;
    at_contato_id?: number | null;

    at_usuario_abertura_id?: number | null;
    at_usuario_responsavel_id?: number | null;

    at_status: AtendimentoStatus;

    at_data_abertura?: string;
    at_data_inicio?: string | null;
    at_data_finalizacao?: string | null;
    at_data_cancelamento?: string | null;

    at_descricao: string;

    at_causa?: string | null;
    at_observacao_diagnostico?: string | null;

    at_solucao?: string | null;

    at_motivo_cancelamento?: string | null;


    /* =================================================
       DADOS RELACIONADOS
    ================================================= */

    cli_fantasia?: string;

    pj_codigo?: string;
    pj_descresumo?: string;

    sis_sigla?: string;
    sis_descricao?: string;

    ta_descricao?: string;

    ca_descricao?: string;

    responsavel_nome?: string;

    abertura_nome?: string;

    cc_nome?: string;
    cc_funcao?: string;
}


/* =====================================================
   LISTAR ATENDIMENTOS
===================================================== */

export async function getAtendimentos(
    search = "",
    page = 1,
    limit = 20
) {

    const response =
        await api.get(
            "/atendimento",
            {
                params: {
                    search,
                    page,
                    limit,
                },
            }
        );

    return response.data;
}


/* =====================================================
   BUSCAR POR ID
===================================================== */

export async function getAtendimentoById(
    id: number
) {

    const response =
        await api.get(
            `/atendimento/${id}`
        );

    return response.data;
}


/* =====================================================
   CRIAR
===================================================== */

export async function createAtendimento(
    data: {

        at_cliente_id: number;

        at_projeto_id?: number | null;

        at_sistema_id?: number | null;

        at_tipo_id: number;

        at_categoria_id: number;

        at_contato_id?: number | null;

        at_descricao: string;

    }
) {

    const response =
        await api.post(
            "/atendimento",
            data
        );

    return response.data;
}


/* =====================================================
   ATUALIZAR
===================================================== */

export async function updateAtendimento(
    id: number,
    data: {

        at_cliente_id: number;

        at_projeto_id?: number | null;

        at_sistema_id?: number | null;

        at_tipo_id: number;

        at_categoria_id: number;

        at_contato_id?: number | null;

        at_descricao: string;

        at_status?: AtendimentoStatus;

        at_usuario_responsavel_id?: number | null;

        at_data_inicio?: string | null;

        at_causa?: string | null;

        at_observacao_diagnostico?: string | null;

        at_solucao?: string | null;

        at_data_finalizacao?: string | null;

        at_data_cancelamento?: string | null;

        at_motivo_cancelamento?: string | null;

    }
) {

    const response =
        await api.put(
            `/atendimento/${id}`,
            data
        );

    return response.data;
}