<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "age"],
};
</script>
