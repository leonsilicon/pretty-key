# pretty-key

Get a prettified string representation of a key.

```bash
npm install pretty-key
```

## Usage

```ts
import getPrettyKey from "pretty-key";

// Basic key labels
getPrettyKey("esc"); // "⎋"
getPrettyKey("enter"); // "↩"
getPrettyKey("space"); // "␣"

// Chromium-style / keycode-ts2 aliases also work
getPrettyKey("ArrowLeft"); // "←"
getPrettyKey("MetaLeft"); // "⌘"
getPrettyKey("NumpadDivide"); // "÷"

// Build shortcut labels by formatting each key and joining them
["cmd", "shift", "p"].map(getPrettyKey).join("");
// "⌘⇧p"

// Switch platform-specific modifier output when needed
getPrettyKey("cmd", "mac"); // "⌘"
getPrettyKey("cmd", "windows"); // "❖"
getPrettyKey("alt", "windows"); // "alt"

// Unknown keys fall back to the original input
getPrettyKey("customShortcutKey"); // "customShortcutKey"
```

A full list of keycodes can be found in [./src/index.ts](./src/index.ts). The list of supported keycodes is from [KeyMappingCode](https://github.com/leonsilicon/keycode-ts/blob/1c7cb74e133f4b1e10410eeefc7f051340c5484e/src/generated.ts#L18) from [keycode-ts2](https://www.npmjs.com/package/keycode-ts2), as well as common aliases. `KeyMappingCode` uses the [Chromium](https://github.com/leonsilicon/keycode-ts/blob/main/keycode_converter_data.inc) keycodes as the source of truth.
