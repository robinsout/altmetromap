<template>
  <g>
    <circle
      :cx="cx"
      :cy="cy"
      :stroke="isOnRoute ? 'red' : color"
      :r="radius"
      class="cl-2"/>
  </g>
</template>

<script>
const DEFAULT_POINT_RADIUS = 8.3;

export default {
  props : {
    cx : {
      type     : Number,
      required : true,
    },
    cy : {
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
    radius : {
      type    : Number,
      default : DEFAULT_POINT_RADIUS,
    },
  },
};
</script>

<style scoped>
.cl-2 {
    stroke-miterlimit: 10;
    stroke-width: 3px;
    fill: #fff;
}
</style>>
