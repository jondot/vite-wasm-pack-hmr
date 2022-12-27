vite-wasm-pack-hmr
==================

Hot module reload integration for Vite, used with the wasm-pack plugin.


## Usage

Run the example:

```bash
$ yarn add vite-wasm-pack-hmr
```

In your `vite.config.ts`:

```ts
import { wasmPackHmr } from 'vite-wasm-pack-hmr'

//...
export default defineConfig({
  build: {
    minify: false
  },
  plugins: [react(), wasmPack(['./my-crate']), wasmPackHmr()],
  //...
```


# Copyright

Copyright (c) 2022 [@jondot](http://twitter.com/jondot). See [LICENSE](LICENSE.txt) for further details.
