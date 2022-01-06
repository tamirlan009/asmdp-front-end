<template>
  <button type="button" class="btn me-1 ms-1">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonPrimary"
}
</script>

<style scoped>
  .btn{
    background: #528BCC;
  }
</style>