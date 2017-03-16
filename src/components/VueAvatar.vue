<template>
  <div :style="{
    width:size.width?size.width:size,
    height:size.height?size.height:size,
    'border-radius':radius
  }" :class="['vue-avatar',cssClass]">
    <img :src="url" :alt="title">
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    props: {
      url: {
        type: String
      },
      size: {
        type: String,
        default: '28px'
      },
      radius: {
        type: String,
        default: '100px'
      },
      cssClass: {
        type: String
      },
      title: {
        type: String
      }
    },
    created(){

    },
    methods: {},
    components: {}
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  .vue-avatar {
    position: relative;
    overflow: hidden;
    display: inline-block;
    > img {
      object-fit: cover;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
    }
  }
</style>

