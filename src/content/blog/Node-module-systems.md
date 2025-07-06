---
title: "Node Module Systems"
description: "To use ECMAScript modules, you need to add the following field to your 'package.json'"
pubDate: "Jul 06 2025"
heroImage: "../../assets/blog-placeholder-4.jpg"
---

# Node Module Systems

In Node.js (and JavaScript in general), `require` and `import` are two different module systems. Understanding their differences is important, especially when working with modern tools like ES modules, bundlers, and frameworks like Astro or Express.

---

## 🔄 `require` vs `import`: Key Differences

| Feature | `require()` | `import` |
| --- | --- | --- |
| **Module System** | CommonJS | ES Modules (ESM) |
| **Syntax** | `const fs = require('fs')` | `import fs from 'fs'` |
| **Works in** | Node.js (CommonJS) | Node.js (with `"type": "module"`) or front-end (ESM) |
| **Execution** | Synchronously loaded | Statically analyzed and asynchronous |
| **Top-level only?** | ❌ Can use anywhere (even inside functions) | ✅ Must be at the top level only |
| **Default Export Handling** | Uses `.default` for ESM interop | Built-in support |
| **Tree Shaking** | ❌ No | ✅ Yes (with bundlers) |
| **Interoperability** | Needs `esm` package or Babel for ESM | Node supports `import()` with config |

---

## ✅ Examples

### 🔹 Using `require()` (CommonJS)

```
// CommonJS
const express = require('express');
const fs = require('fs');

function loadModule(name) {
  const lib = require(name); // Allowed anywhere
}

```

> Works by default in Node.js unless you set "type": "module" in package.json.
> 

---

### 🔹 Using `import` (ESM)

```
// ESM
import express from 'express';
import fs from 'fs';

// ❌ Can't do this:
function loadModule(name) {
  import(name); // Only dynamic `import()` allowed here
}

```

> Works in:
> 
- Modern browsers (native support)
- Node.js **with** `"type": "module"` in `package.json`

---

## 🧠 Node.js Project Configs

**If using ESM:**

```json
// package.json
"type": "module"

```

Now `import` works. But `require()` no longer works unless behind dynamic `createRequire`.