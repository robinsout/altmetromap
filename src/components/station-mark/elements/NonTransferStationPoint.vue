<template>
  <g>
    <line
      :x1="x1"
      :y1="y1"
      :x2="x2"
      :y2="y2"
      :stroke="isOnRoute ? 'red' : color"
      class="cl-22"/>
  </g>
</template>

<script>
export default {
  props : {
    x1 : {
      type     : Number,
      required : true,
    },
    y1 : {
      type     : Number,
      required : true,
    },
    x2 : {
      type     : Number,
      required : true,
    },
    y2 : {
      type     : Number,
      required : true,
    },
    color : {
      type     : String,
      required : true,
    },
    isOnRoute : {
      type    : Boolean,
      default : false,
    },
  },
};
</script>

<style scoped>
.cl-22 {
    stroke-miterlimit: 10;
    stroke-width: 5px;
    fill: none;
}
</style>
