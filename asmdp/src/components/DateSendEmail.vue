<template>
    <div class="container mt-5 text-white">
        <div class="row">
          <div class="col-lg-6 ">
            <div class="list-group mx-0">
              <strong class="d-inline-block mb-2 text-secondary">Выберите почту</strong>

              <label class="list-group-item d-flex gap-2 rounded-3 mb-1">
                <input class="form-check-input flex-shrink-0" type="checkbox" checked="">
                  <span class="text-white">
                    tamirlanshereuzhev@haiods
                    <small class="d-block text-white-50">Личная почта</small>
                  </span>
              </label>

              <label class="list-group-item d-flex gap-2  rounded-3 mb-1">
                <input class="form-check-input flex-shrink-0" type="checkbox" checked="">
                <span class="text-white">
                    tamirlanshereuzhev@haiods
                    <small class="d-block text-white-50">Личная почта</small>
                  </span>
              </label>

              <label class="list-group-item d-flex gap-2 rounded-3 mb-1">
                <input class="form-check-input flex-shrink-0" type="checkbox" checked="">
                <span class="text-white">
                    tamirlanshereuzhev@haiods
                    <small class="d-block text-white-50">Личная почта</small>
                  </span>
              </label>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="list-group mx-0">
              <strong class="d-inline-block mb-2 text-secondary">Контрольный выезд</strong>
              <div class="card text-white">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title">23.10.1194</h5>
                      <p class="card-text">Колличество найденных ям: 45</p>
                      <p class="card-text">Колличество сохраненных изображении: 778</p>
                      <button-primary>Отправить</button-primary>
                      <a href="#" class="btn btn-warning ms-1">Посмотреть на карте</a>
                    </div>
                    <div class="col-5">
                      <img src="@/assets/logo.png" class="img-thumbnail" style="height: 20vh;" alt="...">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
export default {
  name: "DateSendEmail",
  components: {}

}
</script>

<style scoped>

.list-group-item{
  background: #3C3F41;
}

.card{
  background: #3C3F41;
}

.form-check-input{
  background: #bbbbbb;

}

.form-check-input:checked{
  background: #528BCC;

}

</style>