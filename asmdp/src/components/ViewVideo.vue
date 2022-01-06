<template>

  <div class="container rounded-3 shadow-lg mb-4 text-white">
    <div class="d-flex pt-3 pb-3 day-item">
      <div class="pb-3 mt-2 small lh-sm w-100">
        <div class="d-flex justify-content-start">
          <h5 class="text-white">Контрольный выезд на 21.10.2005 г.</h5>
        </div>
        <hr>
      </div>
    </div>
    <div class="col">
      <div class="embed-responsive embed-responsive-4by3 video">
        <video controls>
          <source src="" type="video/mp4"/>
          <source src="" type="video/webm"/>
        </video>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ViewVideo"
}
</script>

<style scoped>

.container{
  background: #3C3F41;
}

.video{
  height: 50vh;
}

</style>