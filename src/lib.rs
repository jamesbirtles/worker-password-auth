use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

/// Generate a password hash for the given password.
///
/// Uses Argon2 with owasp recommended settings
#[wasm_bindgen(js_name = "hashPassword")]
pub fn hash_password(password: &str) -> String {
    password_auth::generate_hash(password)
}

/// Verify the provided password against the provided password hash.
#[wasm_bindgen(js_name = "verifyPassword")]
pub fn verify_password(password: &str, hash: &str) -> bool {
    password_auth::verify_password(password, hash).is_ok()
}
