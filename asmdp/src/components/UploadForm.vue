<template>
  <div>
    <section class="container">
      <div class="col-md-10 mx-auto col-lg-5 text-white mt-5">
        <form class="p-4 p-md-5 rounded-3 shadow-lg" enctype="multipart/form-data">
          <div class="mb-3">
            <label for="video" class="form-label">Выберите видео-файл</label>
            <input type="file" class="form-control" id="video">
            <div class="form-text text-white-50">Файл должен иметь расширение формата MOV, MP4 </div>
          </div>
          <div class="mb-3">
            <label for="datetime" class="form-label">Дата и время выезда</label>
            <input type="datetime-local" class="form-control" id="datetime" step="1">
            <div class="form-text text-white-50">Пожалуйста, введите точное Московское время и дата выезда</div>
          </div>
          <div class="mt-5">
            <button-primary>Отправить</button-primary>
            <button-primary v-on:click="$router.push('/')">На главную</button-primary>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>


import ButtonPrimary from "@/components/UI/ButtonPrimary";

export default {
  name: "UploadForm",
  components: {ButtonPrimary}
}
</script>

<style scoped>

form{
  background: #3C3F41;
}

@media (max-width: 575.98px) {
  .btn{
    margin-top: 5px;
  }
}



</style>