import { getDatabase } from "./database";


/* =====================================================
   MIGRATIONS
===================================================== */

export async function runMigrations() {

    const db = await getDatabase();


    /* =================================================
       CLIENTES
    ================================================= */

    await db.execAsync(`

        CREATE TABLE IF NOT EXISTS clientes (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            pessoa TEXT NOT NULL,

            nome TEXT NOT NULL,

            nomeFantasia TEXT,

            documento TEXT NOT NULL UNIQUE,

            telefone TEXT,

            email TEXT,

            cep TEXT,

            endereco TEXT,

            numero TEXT,

            bairro TEXT,

            cidade TEXT,

            estado TEXT,

            observacao TEXT,

            status TEXT NOT NULL DEFAULT 'A'

        );

    `);

}