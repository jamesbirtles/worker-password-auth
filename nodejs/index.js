import {
    verifyPassword as verifyPasswordWasm,
    hashPassword as hashPasswordWasm,
} from "./pkg/worker_password_auth.cjs";

export async function verifyPassword(password, hash) {
    return verifyPasswordWasm(password, hash);
}

export async function hashPassword(password) {
    return hashPasswordWasm(password);
}
