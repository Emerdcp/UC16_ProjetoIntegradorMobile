import { getDatabase } from "./database";


/* =====================================================
   SEED
===================================================== */

export async function runSeed() {

    const db = await getDatabase();


    /* =================================================
       VERIFICA SE JÁ EXISTEM CLIENTES
    ================================================= */

    const result = await db.getFirstAsync<{
        total: number;
    }>(`
        SELECT COUNT(*) as total
        FROM clientes
    `);


    if (result && result.total > 0) {
        return;
    }


    /* =================================================
       EMPRESA XYZ
    ================================================= */

    await db.runAsync(
        `
        INSERT INTO clientes (
            pessoa,
            nome,
            nomeFantasia,
            documento,
            telefone,
            email,
            cep,
            endereco,
            numero,
            bairro,
            cidade,
            estado,
            observacao,
            status
        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        
        "J",
        "Empresa XYZ Ltda",
        "Empresa XYZ",
        "12345678000195",
        "",
        "",
        "",
        "",
        "",
        "",
        "Americana",
        "SP",
        "",
        "A"
    );


    /* =================================================
       CLIENTE ABC
    ================================================= */

    await db.runAsync(
        `
        INSERT INTO clientes (
            pessoa,
            nome,
            nomeFantasia,
            documento,
            telefone,
            email,
            cep,
            endereco,
            numero,
            bairro,
            cidade,
            estado,
            observacao,
            status
        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,

        "J",
        "Cliente ABC Ltda",
        "Cliente ABC",
        "98765432000110",
        "",
        "",
        "",
        "",
        "",
        "",
        "Campinas",
        "SP",
        "",
        "A"
    );


    /* =================================================
       CONTROLPRO
    ================================================= */

    await db.runAsync(
        `
        INSERT INTO clientes (
            pessoa,
            nome,
            nomeFantasia,
            documento,
            telefone,
            email,
            cep,
            endereco,
            numero,
            bairro,
            cidade,
            estado,
            observacao,
            status
        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,

        "J",
        "Comercial ControlPro Ltda",
        "ControlPro",
        "11222333000144",
        "",
        "",
        "",
        "",
        "",
        "",
        "São Paulo",
        "SP",
        "",
        "I"
    );

}