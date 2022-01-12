<template>
  <div class="dialog" v-if="show" v-on:click="hideDialog">
    <div class="dialog-content" v-on:click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import dialogMixins from "../../mixins/dialogMixins";

export default {
  name: "BaseDialog",
  mixins: [dialogMixins],
}

</script>

<style scoped>

.dialog{
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}

.dialog-content{
  margin: auto;
  background: #3C3F41;;
  border-radius: 6px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}

</style>