export async function buscarCnpj(cnpj: string) {

    const cnpjLimpo = cnpj.replace(/\D/g, "");

    if (cnpjLimpo.length !== 14) {
        return null;
    }

    try {

        const response = await fetch(
            `https://brasilapi.com.br/api/cnpj/v1/${cnpjLimpo}`
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();

        return data;

    } catch (error) {

        console.log("Erro ao consultar CNPJ:", error);

        return null;
    }
}