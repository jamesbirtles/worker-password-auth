import init, {
    verifyPassword as verifyPasswordWasm,
    hashPassword as hashPasswordWasm,
} from "./pkg/worker_password_auth.js";
import mod from "./pkg/worker_password_auth_bg.wasm";

let waitForInit = undefined;

function doInit() {
    return waitForInit ? waitForInit : (waitForInit = init(mod));
}

export async function verifyPassword(password, hash) {
    await doInit();
    return verifyPasswordWasm(password, hash);
}

export async function hashPassword(password) {
    await doInit();
    return hashPasswordWasm(password);
}
