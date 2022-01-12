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
          <form @submit.prevent="onSubmit" class="p-5 rounded-3 shadow-lg">
            <div class="form-floating mb-3">
              <input v-model="username" type="text" class="form-control" id="username" name="username" placeholder="">
              <label for="username">Логин</label>
            </div>
            <div class="form-floating mb-3">
              <input v-model="password" type="password" class="form-control" id="password" name="password" placeholder="">
              <label for="password">Пароль</label>
            </div>
            <div class="py-4">
              <button  class="w-100 btn btn-start" type="submit">Войти</button>
            </div>
            <hr class="my-2">
            <small class="form-placeholder">Введите логин и пароль</small>
            <div v-if="errorAuth" class="col auth-error mt-3 rounded-3 bg-dark ">
              <small class="form-placeholder">Неверный логин или пароль</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "authenticate",
  data(){
    return{
      username:'',
      password:'',
      errorAuth: false
    }
  },
  methods:{

//     async onSubmit(){
//       this.errorAuth=false
// //       await this.$store.dispatch('auth/onLogin',{
// //         username: this.username,
// //         password: this.password
// //       }).then((res)=>{
// // ``
// //         this.setToken(res.data.access)
// //         localStorage.setItem('token', res.data.access)
// //         const lc = localStorage.getItem('token') !== ''
// //         console.log(lc)
// //         this.$router.push({ name: 'Main' })
//         // commit('setToken', res.data.access);
//
//         // if(this.token!==null){
//         //   this.$router.push({ name: 'Main' })
//         // }
//         // else{
//         //   this.errorAuth = true
//         // }
//       })
//     }

    onSubmit(){
      this.errorAuth=false

      this.$store.dispatch('auth/onLogin',{
        username: this.username,
        password: this.password
      }).then(()=>{
        if(this.token!==null){
          this.$router.push({ name: 'Main' })
        }
        else{
          this.errorAuth = true
        }
      })
    }
  },

  computed:{
    ...mapState({
      token: state => state.auth.token,
    })
  },
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

.auth-error{

}
</style>