import * as SQLite from "expo-sqlite";


/* =====================================================
   BANCO DE DADOS
===================================================== */

const DATABASE_NAME = "controlpro.db";


let database: SQLite.SQLiteDatabase | null = null;


/* =====================================================
   ABRIR BANCO
===================================================== */

export async function getDatabase() {

    if (database) {
        return database;
    }

    database = await SQLite.openDatabaseAsync(
        DATABASE_NAME
    );

    return database;
}