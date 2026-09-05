export interface CnpjResponse {
    cnpj?: string;
    razao_social?: string;
    nome_fantasia?: string;
    email?: string;
    ddd_telefone_1?: string;
    ddd_telefone_2?: string;
    cep?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    municipio?: string;
    uf?: string;
}

export async function buscarCnpj(
    cnpj: string
): Promise<CnpjResponse | null> {

    const cnpjLimpo =  cnpj.replace(/\D/g, "");
    if (cnpjLimpo.length !== 14) {
        return null;
    }
    try {
        const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpjLimpo}`;
        console.log(
                "Consultando CNPJ:",
            url
        );
        const response =
            await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });
        console.log(
            "Status BrasilAPI:",
            response.status
        );

        if (!response.ok) {

            console.log(
                "BrasilAPI retornou:",
                response.status
            );

            return null;
        }

        const data = await response.json();

        console.log(
            "Dados CNPJ:",
            data
        );

        return data;

    } catch (error) {

        console.log(
            "Erro ao consultar CNPJ:",
            error
        );

        return null;
    }
}