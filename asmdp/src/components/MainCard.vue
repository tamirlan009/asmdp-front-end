<template>
  <div>
    <div v-for="day in dayItems" v-bind:key="day.id" class="container rounded-3 shadow-lg mb-4 text-white">
      <div class="d-flex pt-3 pb-3">
        <div class="pb-3 mt-2 small lh-sm w-100">
          <div class="d-flex justify-content-start">
            <h5 class="text-white">Контрольный выезд на {{ $filters.dateTransform(day.date) }} г.</h5>
            <div v-if="day.send_mail_state" class="col-sm ps-3">
              <span class="badge rounded-pill bg-success text-dark">отправлено</span>
            </div>
            <div v-else class="col-sm ps-3">
              <span class="badge rounded-pill bg-warning text-dark">не отправлено</span>
            </div>
          </div>
          <div class="d-flex justify-content-between ">
            <div class="col-md-4 col-lg-6 d-flex justify-content-start mt-3">
              <span class="d-block">количество обнаруженных ям: {{day.count_pothole}}</span>
              <span class="d-block ps-3">количество сохраненных изображении: {{day.count_image}}</span>
            </div>
            <div class="col-md-8 col-lg-6 d-flex flex-wrap align-items-center justify-content-center">
              <div class="btn-sm">
                <button-primary v-on:click="$router.push(`/video/${day.id}`)">Смотреть</button-primary>
                <button-primary v-on:click="$router.push(`/edit/${day.id}`)">Редактировать</button-primary>
                <button-primary v-on:click="$router.push(`/send/${day.id}`)">Отправить</button-primary>
                <button-primary v-on:click="showDialog">Удалить</button-primary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <base-dialog v-model:show="dialogVisible">
      <delete-dialog-content @dismissDialogModel="dismissDialogModel"></delete-dialog-content>
    </base-dialog>
  </div>
</template>

<script>

import DeleteDialogContent from "./DeleteDialogContent";
import {mapState, mapActions} from "vuex";
// import {getDay} from "@/api/apiRoutes";

export default {
  name: "MainCard",
  components: {DeleteDialogContent},
  props:{
    DayData: Array
  },
  data(){
    return{
      dialogVisible: false
    }
  },
  methods:{
    ...mapActions({
      requestGetDay: 'mainPage/requestGetDay'
    }),

    showDialog(){
      this.dialogVisible = true
      console.log(this.dayItems)
    },
    dismissDialogModel(){
      this.dialogVisible = false
    },

  },
  computed:{
    ...mapState({
      dayItems: state => state.mainPage.dayItems,
    })
  },
  mounted() {
    this.requestGetDay()
  }

}
</script>

<style scoped>

.container{
  background: #3C3F41;
}

@media (max-width: 992px) {
  .btn{
    margin-top: 5px;
  }
}

</style>