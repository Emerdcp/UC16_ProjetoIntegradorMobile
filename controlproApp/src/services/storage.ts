import * as SecureStore from "expo-secure-store";

/* Salvar informação */
export async function saveItem(
    key: string,
    value: string
) {
    await SecureStore.setItemAsync(key, value);
}

/* Buscar informação */
export async function getItem(
    key: string
) {
    return await SecureStore.getItemAsync(key);
}

/* Remover informação */
export async function removeItem(
    key: string
) {
    await SecureStore.deleteItemAsync(key);
}