export interface Cliente {
    id: number;

    pessoa: "F" | "J";

    nome: string;

    nomeFantasia: string;

    documento: string;

    telefone: string;

    email: string;

    cep: string;

    endereco: string;

    numero: string;

    bairro: string;

    cidade: string;

    estado: string;

    observacao: string;

    status: "A" | "I";
}