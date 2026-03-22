# pretty-key

Returns a prettified string representation of a key.

```bash
npm install pretty-key
```

## Usage

```bash
import { getPrettyKey } from "pretty-key";

const key = getPrettyKey('esc')
```

A full list of keycodes can be found in [./src/index.ts](./src/index.ts). The list of supported keycodes is from `KeyMappingCode` from [keycode-ts2](https://www.npmjs.com/package/keycode-ts2), which is turn is based on [Chromium](https://github.com/leonsilicon/keycode-ts/blob/main/keycode_converter_data.inc).

This project was created using `bun init` in bun v1.3.10. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
