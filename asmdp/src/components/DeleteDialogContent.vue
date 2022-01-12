<template>

  <div class="text-white">
      <div class="modal-header">
        <h5 class="modal-title">Удаление контрольного выезда</h5>
        <button v-on:click="dismissDialogModel" type="button" class="btn-close btn-close-white"></button>
      </div>
      <div class="modal-body">
        <p>Вы действительо хотите удалить контрольный выезд и все связанные с ней данные?</p>
      </div>
      <div class="modal-footer">
        <button-primary v-on:click="dismissDialogModel">Закрыть</button-primary>
        <button-danger>Удалить</button-danger>
      </div>
  </div>
</template>

<script>

export default {
  name: "DeleteDialogContent",
  methods:{
    dismissDialogModel(){
      this.$emit('dismissDialogModel');
    }
  }
}
</script>

<style scoped>

  .modal-body{
    max-width: 400px;
  }

</style>