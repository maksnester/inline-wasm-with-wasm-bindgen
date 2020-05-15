# vue

## Project setup
```
npm install
```

### Compiles and minifies for production
```
npm run build
```

### Run prod build
```
npx serve ./dist
```

Console in browser says:
```
lib.rs:1 Uncaught (in promise) TypeError: WebAssembly.instantiate(): Import #0 module="__wbindgen_placeholder__" error: module is not an object or function
    at t.exports (lib.rs:1)
    at Module.b208 (my.worker.js:5)
    at e (bootstrap:19)
    at bootstrap:83
    at 3e07d48618cc6dc49023.worker.js:1
```
