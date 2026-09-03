import { api } from "./api";


/* =====================================================
   TIPOS
===================================================== */

export type AgendaTipo =
    | "V" // Visita
    | "R" // Reunião
    | "C" // Retorno
    | "T" // Tarefa
    | "E"; // Evento


export type AgendaStatus =
    | "A" // Agendado
    | "R" // Realizado
    | "C"; // Cancelado


export interface AgendaEvento {

    id: number;

    ag_titulo: string;

    ag_descricao?: string | null;

    ag_tipo: AgendaTipo;

    ag_data_inicio: string;

    ag_data_fim?: string | null;

    ag_dia_inteiro: "S" | "N";

    ag_local?: string | null;

    ag_cliente_id?: number | null;

    ag_projeto_id?: number | null;

    ag_atendimento_id?: number | null;

    ag_tarefa_id?: number | null;

    ag_usuario_id?: number | null;

    ag_status: AgendaStatus;

    ag_google_event_id?: string | null;

    ag_google_calendar_id?: string | null;

    st_registro: "A" | "I";

    criado_em?: string;

    atualizado_em?: string;


    /* =================================================
       DADOS RELACIONADOS
    ================================================= */

    cli_razaosocial?: string | null;

    cli_fantasia?: string | null;

    pj_codigo?: string | null;

    pj_descresumo?: string | null;

    usu_nome?: string | null;

}


/* =====================================================
   LISTAR AGENDA
===================================================== */

export async function getAgenda(
    dataInicio?: string,
    dataFim?: string
) {

    const response = await api.get(
        "/agenda",
        {
            params: {
                dataInicio,
                dataFim,
            },
        }
    );

    return response.data as AgendaEvento[];

}


/* =====================================================
   BUSCAR POR ID
===================================================== */

export async function getAgendaById(
    id: number
) {

    const response = await api.get(
        `/agenda/${id}`
    );

    return response.data as AgendaEvento;

}


/* =====================================================
   CRIAR
===================================================== */

export async function createAgenda(
    data: {
        ag_titulo: string;

        ag_descricao?: string | null;

        ag_tipo: AgendaTipo;

        ag_data_inicio: string;

        ag_data_fim?: string | null;

        ag_dia_inteiro?: "S" | "N";

        ag_local?: string | null;

        ag_cliente_id?: number | null;

        ag_projeto_id?: number | null;

        ag_atendimento_id?: number | null;

        ag_tarefa_id?: number | null;

        ag_usuario_id?: number | null;

        ag_status?: AgendaStatus;
    }
) {

    const response = await api.post(
        "/agenda",
        data
    );

    return response.data;

}


/* =====================================================
   ATUALIZAR
===================================================== */

export async function updateAgenda(
    id: number,
    data: {
        ag_titulo: string;

        ag_descricao?: string | null;

        ag_tipo: AgendaTipo;

        ag_data_inicio: string;

        ag_data_fim?: string | null;

        ag_dia_inteiro?: "S" | "N";

        ag_local?: string | null;

        ag_cliente_id?: number | null;

        ag_projeto_id?: number | null;

        ag_atendimento_id?: number | null;

        ag_tarefa_id?: number | null;

        ag_usuario_id?: number | null;

        ag_status?: AgendaStatus;
    }
) {

    const response = await api.put(
        `/agenda/${id}`,
        data
    );

    return response.data;

}


/* =====================================================
   EXCLUIR
===================================================== */

export async function deleteAgenda(
    id: number
) {

    const response = await api.delete(
        `/agenda/${id}`
    );

    return response.data;

}