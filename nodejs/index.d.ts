/**
 * Generate a password hash for the given password.
 *
 * Uses Argon2 with owasp recommended settings
 *
 * @param {string} password
 * @returns {string}
 */
export function hashPassword(password: string): Promise<string>;
/**
 * Verify the provided password against the provided password hash.
 *
 * @param {string} password
 * @param {string} hash
 * @returns {boolean}
 */
export function verifyPassword(
    password: string,
    hash: string,
): Promise<boolean>;
