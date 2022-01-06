<template>
  <div class="container text-center">
    <div class="px-5 py-5">
      <div class="row align-item-center py-5">
        <div class="col text-center text-lg-start p-5">
          <h2 class="display-2">
            Автоматическая система мониторинга дорожного полотна
          </h2>
        </div>
        <div class="col-md-10 mx-auto col-lg-5 p-5">
          <form v-on:submit.prevent class="p-5 rounded-3 shadow-lg">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="username" name="username" placeholder="">
              <label for="username">Логин</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="password" name="password" placeholder="">
              <label for="password">Пароль</label>
            </div>
            <div class="py-4">
              <button class="w-100 btn btn-start" type="submit" v-on:click="$router.push('/')">Войти</button>
            </div>
            <hr class="my-2">
            <small class="form-placeholder">Введите логин и пароль</small>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "authenticate"
}
</script>

<style scoped>

.btn-start{
  background: #72C0EA ;

}

hr{
  background: white;
}

form{
  background: #3C3F41;
}

.form-placeholder{
  color: #BBBBBB;
}
.display-2{
  color: #BBBBBB ;
}


</style>