import wasmInstantiate from "./lib.rs";

console.log(wasmInstantiate)

wasmInstantiate({}).then(instance => {
  console.log(instance);
  console(instance.exports.hello_world());
});
