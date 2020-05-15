import wasmInstantiate from "./lib.rs";

console.log(wasmInstantiate)

wasmInstantiate({}).then(instance => {
  console.log(instance);
  console.log(instance.exports.hello_world());
});
