<template>
  <div id="app">
    <h1>hey</h1>
  </div>
</template>

<script>
import Worker from 'worker-loader!./my.worker.js';
new Worker()

export default {
  name: "app",
};
</script>
