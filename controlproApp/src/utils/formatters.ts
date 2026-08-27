export function somenteNumeros(valor: string): string {
    return valor.replace(/\D/g, "");
}


export function removerMascaraCpf(cpf: string): string {
    return cpf.replace(/\D/g, "");
}


export function removerMascaraCnpj(cnpj: string): string {
    return cnpj.replace(/\D/g, "");
}


export function removerMascaraTelefone(
    telefone: string
): string {
    return telefone.replace(/\D/g, "");
}


export function removerMascaraCep(
    cep: string
): string {
    return cep.replace(/\D/g, "");
}


export function formatCpfCnpj(
    valor: string,
    pessoa: string
) {

    if (!valor) {
        return "";
    }

    const numeros = valor.replace(/\D/g, "");

    if (pessoa === "F") {

        return numeros.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            "$1.$2.$3-$4"
        );
    }

    return numeros.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5"
    );
}


export function formatCep(cep: string) {

    if (!cep) {
        return "";
    }

    return cep.replace(
        /(\d{5})(\d{3})/,
        "$1-$2"
    );
}


export function formatData(data: string): string {

    if (!data) {
        return "";
    }

    const [ano, mes, dia] = data.split("-");

    return `${dia}/${mes}/${ano}`;
}


export function formatStatus(
    value: string,
    lista: {
        value: string;
        label: string;
    }[]
): string {

    const item = lista.find(
        x => x.value === value
    );

    return item
        ? item.label
        : value;
}


export function formatMoeda(valor: number): string {

    return Number(valor || 0)
        .toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL",
            }
        );
}


export function formatHoras(horas: number): string {

    return `${Number(horas || 0)} h`;
}


export function formatPessoa(pessoa: string): string {

    return pessoa === "F"
        ? "Física"
        : "Jurídica";
}


export function formatBoolean(valor: string): string {

    return valor === "S"
        ? "Sim"
        : "Não";
}


export function formatStatusRegistro(
    status: string
): string {

    return status === "A"
        ? "Ativo"
        : "Inativo";
}