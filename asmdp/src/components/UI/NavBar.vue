<template>
    <div class="container rounded-3 shadow-lg">
      <header class=" d-flex flex-wrap align-items-center justify-content-center justify-content-md-between my-3 py-3 mb-4">
        <a class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none" v-on:click="$router.push('/')">
          <img src="../../assets/img-2.png" alt="logo" width="40" height="32">
        </a>
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-light" v-on:click="$router.push('/')">Главная</a></li>
          <li><a href="#" class="nav-link px-2 link-light" v-on:click="$router.push('/upload')">Детектирование</a></li>
          <li><a href="#" class="nav-link px-2 link-light" v-on:click="$router.push('/map')">Карта</a></li>
        </ul>
        <div class="col-md-3 text-end">
          <button type="button" class="btn btn-admin me-2 shadow-lg">Панель администратора</button>
          <button type="button" class="btn btn-end shadow-lg" v-on:click="$router.push('/auth')">Выйти</button>
        </div>
      </header>
    </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

.container{
  background: #3C3F41;
}

.btn-end{
  background: #72C0EA;
}

.btn-admin{
  background: #FFCB33;
}

.link-light{
  border-bottom: 2px solid #3C3F41;
}


.link-light:hover{
  border-bottom: 2px solid white;
}

</style>