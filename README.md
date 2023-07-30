# Worker Password Auth

A simple wrapper around the Rust
[`password_auth`](https://docs.rs/password-auth/latest/password_auth/) crate to make it available
for use in JavaScript. This provides two simple methods to hash a password, and verify the hash
against a password. This package is intended to be used in serverless-like environments,
specifically Cloudflare workers.

## Usage

```js
import { hashPassword, verifyPassword } from "worker-password-auth";

const hash = await hashPassword("abc123");
assert((await verifyPassword("abc123", hash)) === true);
```

### Usage with Vite

This package imports the wasm file directly in web targets. This means in vite you may need to use
[`vite-plugin-wasm`](https://github.com/Menci/vite-plugin-wasm).

E.g.

```ts
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default {
    plugins: [wasm(), topLevelAwait()],
};
```

## License

Licensed under either of

-   Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
-   MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

### Contribution

Unless you explicitly state otherwise, any contribution intentionally
submitted for inclusion in the work by you, as defined in the Apache-2.0
license, shall be dual licensed as above, without any additional terms or
conditions.
