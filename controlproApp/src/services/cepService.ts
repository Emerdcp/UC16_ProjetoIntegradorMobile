export async function buscarCep(cep: string) {

    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
        return null;
    }

    try {

        const response = await fetch(
            `https://viacep.com.br/ws/${cepLimpo}/json/`
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();

        if (data.erro) {
            return null;
        }

        return data;

    } catch (error) {

        console.log("Erro ao consultar CEP:", error);

        return null;
    }
}