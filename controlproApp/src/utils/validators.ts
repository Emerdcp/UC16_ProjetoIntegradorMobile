export function validarEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


export function validarCPF(cpf: string): boolean {

    cpf = cpf.replace(/\D/g, "");

    if (
        cpf.length !== 11 ||
        /^(\d)\1+$/.test(cpf)
    ) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    return resto === parseInt(cpf[10]);
}


export function validarCNPJ(cnpj: string): boolean {

    const valor = cnpj.replace(/\D/g, "");

    if (valor.length !== 14) {
        return false;
    }

    return true;
}