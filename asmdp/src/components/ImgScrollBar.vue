<template>
  <div class="img-row">
    <div class="row row-cols-1 row-cols-sm-2">
      <div v-for="(img, index) in imgList" v-bind:key="index" class="col img-card">
        <div class="col-md-12">
          <img
              class="img-fluid"
              v-bind:src="img"
              v-on:click="selectImg(index)"
              alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgScrollBar",
  props:{
    imgList:{
      type: Array
    }
  },
  methods:{
    selectImg(index){
      this.$emit('selectImg', index);

    }
  }

}
</script>

<style scoped>

.col{
  padding: 0;
  margin: 0;
}

.img-card{
  padding: 0 0 10px 10px;
}

.img-row{
  overflow-y: scroll;
  overflow-x: hidden;
  height: 80vh;

}

</style>