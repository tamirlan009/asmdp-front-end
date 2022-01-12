<template>
  <button type="button" class="btn me-1 ms-1">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonDanger"
}
</script>

<style scoped>

  .btn{
    background: #d7213a;
  }

</style>