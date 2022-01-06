<template>
  <div>
    <div class="container rounded-3 shadow-lg mb-4 text-white">
      <div class="d-flex pt-3 pb-3">
        <div class="pb-3 mt-2 small lh-sm w-100">
          <div class="d-flex justify-content-start">
            <h5 class="text-white">Контрольный выезд на 21.10.2005 г.</h5>
            <div class="col-sm ps-3">
              <span class="badge rounded-pill bg-success text-dark">отправлено</span>
            </div>
          </div>
          <div class="d-flex justify-content-between ">
            <div class="col d-flex justify-content-start mt-3">
              <span class="d-block">количество обнаруженных ям: 12</span>
              <span class="d-block ps-3">количество сохраненных изображении: 23</span>
            </div>
            <div class="col d-flex justify-content-end">
              <div class="btn-sm">
                <button-primary v-on:click="$router.push('/video/12')">Смотреть</button-primary>
                <button-primary>Редактировать</button-primary>
                <button-primary v-on:click="$router.push('/send/12')">Отправить</button-primary>
                <button-primary v-on:click="showDialog">Удалить</button-primary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-white">{{this.dialogVisible}}</h1>
    <base-dialog v-model:show="dialogVisible">
      <h1>Hello niger</h1>
    </base-dialog>
<!--    <base-dialog v-model:show="dialogVisible">-->
<!--      <h1>Hello niger</h1>-->
<!--    </base-dialog>-->


  </div>
</template>

<script>

import BaseDialog from "@/components/UI/BaseDialog";
export default {
  name: "MainCard",
  components: {BaseDialog},
  data(){
    return{
      dialogVisible: false
    }
  },
  methods:{
    showDialog(){
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

.container{
  background: #3C3F41;
}


</style>