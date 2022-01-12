<template>
  <nav-bar></nav-bar>
  <div>
    <div class="container">

      <div v-if="imgList.length===0" class="offset-2">
        <div class="alert alert-primary col-10" role="alert">
          <strong>Список изображении пуст!</strong> Вам следует вернуться на главную страницу.
          <button-primary @click="$router.push('/')">на главную</button-primary>
        </div>
      </div>

      <div v-else class="row">
        <div class="col-4 img-collections">
          <img-scroll-bar
              v-bind:img-list="imgList"
              @selectImg="selectImg"
          ></img-scroll-bar>
        </div>

        <div class="col">
          <v-zoomer-gallery class="img-zoom"
              ref="gallery"
              :list="imgList"
              :zooming-elastic="false"
              v-model="selIndex"
          ></v-zoomer-gallery>
          <edit-img-tools
            @zoomIn="this.$refs.gallery.zoomIn()"
            @zoomOut="$refs.gallery.zoomOut()"
            @reset="$refs.gallery.reset()"
          ></edit-img-tools>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ImgScrollBar from "../components/ImgScrollBar";
import EditImgTools from "@/components/EditImgTools";
import {mapState, mapMutations, mapActions} from 'vuex'


export default {
  name: "EditPage",
  data(){
    return{
      id:1
    }
  },
  components:{
    EditImgTools,
    ImgScrollBar,
  },
  methods:{
    ...mapMutations({
      selectImg: 'editPage/selectImg',
      getImg: 'editPage/getImg',
      removeImg: 'editPage/removeImg',
      increaseSelectImg: 'editPage/increaseSelectImg',
      decreaseSelectImg: 'editPage/decreaseSelectImg',
    }),

    ...mapActions({
      getPhoto: 'editPage/getPhoto'
    }),

    loaImg(){
      this.getPhoto({id:this.$route.params.id}).then((res)=>{
        console.log(res)
      })
    }

  },
  computed:{
    ...mapState({
      selIndex: state => state.editPage.selIndex,
      urlImageList: state => state.editPage.urlImageList,
      imgList: state => state.editPage.imgList,
      dateList: state => state.editPage.dateList
    })
  },
  mounted() {
    this.loaImg()
  }
}

</script>

<style scoped>

  .img-zoom{
    height: 60vh;
    background: #3C3F41!important;
  }

  footer{
    background: #3C3F41!important;
  }


</style>