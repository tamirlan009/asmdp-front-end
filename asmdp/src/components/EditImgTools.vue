<template>
  <footer class="bg-white d-flex flex-wrap mt-3 rounded-3">
    <button
      :disabled="selIndex === 0"
      @click="increaseSelectImg(1)"
      class="btn rounded-3">
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"/>
      </svg>
    </button>
    <span class="text-white mt-2">{{selIndex+1}} / {{imgList.length}}</span>
    <button
      :disabled="selIndex===imgList.length-1"
      @click="decreaseSelectImg(1)"
      class="btn rounded-3">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/>
      </svg>
    </button>
    <button
      @click="$emit('zoomIn')"
      class="btn">
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    </button>
    <button
      class="btn"
      @click="$emit('zoomOut')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    </button>
    <button
      class="btn"
      @click="$emit('reset')"
    >
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z M20,13c0-4.42-3.58-8-8-8c-0.06,0-0.12,0.01-0.18,0.01l1.09-1.09L11.5,2.5L8,6l3.5,3.5l1.41-1.41 l-1.08-1.08C11.89,7.01,11.95,7,12,7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02C16.95,20.44,20,17.08,20,13z"/></g></g>
      </svg>
    </button>
    <button class="btn" @click="removeImg">
      <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
        <title>удалить изображение</title>
      </svg>
    </button>
    <button class="btn">
      <svg type="button" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF"><rect fill="none" height="24" width="24"/>
        <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"/>
        <title>показать на карте</title>
      </svg>
    </button>
    <button class="btn">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24" width="34px" fill="#FFFFFF">
        <g><rect fill="none" height="24" width="24"/><path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h8l0-2H4V8l8,5l8-5v5h2V6C22,4.9,21.1,4,20,4z M12,11L4,6h16L12,11z M17.34,22l-3.54-3.54l1.41-1.41l2.12,2.12l4.24-4.24L23,16.34L17.34,22z"/></g>
      </svg>
    </button>
  </footer>
</template>

<script>


import {mapMutations, mapState} from "vuex";

export default {
  name: "EditImgTools",
  methods:{
    ...mapMutations({
      selectImg: 'editPage/selectImg',
      getImg: 'editPage/getImg',
      removeImg: 'editPage/removeImg',
      increaseSelectImg: 'editPage/increaseSelectImg',
      decreaseSelectImg: 'editPage/decreaseSelectImg',
    })
  },
  computed:{
    ...mapState({
      selIndex: state => state.editPage.selIndex,
      urlImageList: state => state.editPage.urlImageList,
      imgList: state => state.editPage.imgList
    })
  },
}
</script>

<style scoped>

  footer{
    background: #3C3F41!important;
  }

</style>