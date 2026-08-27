export function cpfMask(value: string) {

    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        .slice(0, 14);
}


export function cnpjMask(value: string) {

    return value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .slice(0, 18);
}


export function cpfCnpjMask(
    value: string,
    pessoa: string
) {

    if (pessoa === "F") {
        return cpfMask(value);
    }

    return cnpjMask(value);
}


/* =====================================================
   TELEFONE
===================================================== */

export function telefoneMask(value: string) {

    const numero = value.replace(/\D/g, "");

    if (numero.length <= 10) {

        return numero.replace(
            /(\d{2})(\d{4})(\d{0,4})/,
            "($1) $2-$3"
        );

    }

    return numero.replace(
        /(\d{2})(\d{5})(\d{0,4})/,
        "($1) $2-$3"
    );
}


/* =====================================================
   CEP
===================================================== */

export function cepMask(value: string) {

    return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .slice(0, 9);
}


/* =====================================================
   DATA
===================================================== */

export function dataMask(value: string) {

    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
        .slice(0, 10);
}


/* =====================================================
   HORA
===================================================== */

export function horaMask(value: string) {

    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1:$2")
        .slice(0, 5);
}


/* =====================================================
   HORAS CONTRATADAS
===================================================== */

export function horasMask(value: string) {

    return value.replace(/[^\d.]/g, "");
}