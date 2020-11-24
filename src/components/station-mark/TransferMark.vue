<template>
  <g>
    <circle
      :cx="cx"
      :cy="cy"
      :stroke="isOnRoute ? 'red' : color"
      class="cl-2"
      r="8.3"/>
  </g>
</template>

<script>
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
