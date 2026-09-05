import { api } from "./api";

export interface Cliente {
    id: number;
    cli_razaosocial: string;
    cli_fantasia: string;
    cli_pessoa: "F" | "J";
    cli_cnpjcpf: string;
    cli_datacadastro?: string;
    cli_status: "A" | "I";
    cli_horascontratadas?: number;
    cli_ramoatividade_id?: number;
    cli_sistema_id?: number;
    cli_observacao?: string;
    cli_telefone?: string;
    cli_email?: string;
}

export interface EnderecoCliente {
    ce_cep: string;
    ce_endereco: string;
    ce_numero: string;
    ce_complemento?: string;
    ce_bairro: string;
    ce_cidade: string;
    ce_estado: string;
}

export interface ContatoCliente {
    id?: number;
    cc_nome: string;
    cc_funcao: string;
    cc_telefone: string;
    cc_email: string;
    cc_status: "A" | "I";
    st_registro?: "A" | "I";
}

export interface SistemaCliente {
    id: number;
    sis_sigla?: string;
    sis_descricao?: string;
}

/* =====================================================
   LISTAGEM DE CLIENTES
===================================================== */

export async function getClientes(
    search = "",
    page = 1,
    limit = 100
) {
    const response =
        await api.get(
            "/cliente",
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
    CADASTRO
===================================================== */
export async function createCliente(
    data: any
) {
    const response =
        await api.post(
            "/cliente",
            data
        );
    return response.data;
}
/* =====================================================
    BUSCA INDIVIDUAL
===================================================== */

export async function getClienteById(
    id: number
) {
    const response =
        await api.get(
            `/cliente/${id}`
        );
    return response.data;
}

/* =====================================================
    ATUALZIAÇÃO
===================================================== */

export async function updateCliente(
    id: number,
    data: any
) {
    const response =
        await api.put(
            `/cliente/${id}`,
            data
        );
    return response.data;
}

/* =====================================================
    EXCLUSÃO
===================================================== */

export async function deleteCliente(
    id: number
) {
    const response =
        await api.delete(
            `/cliente/${id}`
        );
    return response.data;
}