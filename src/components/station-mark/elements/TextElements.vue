<template>
  <g>
    <text
      :x="x + dx"
      :y="y + dy - 14"
      class="station-name">{{ names.nameOriginal }}</text>
    <text
      :x="x + dx"
      :y="y + dy"
      class="station-name">{{ names.nameTranslit }}</text>
  </g>
</template>

<script>
export default {
  props : {
    names : {
      type     : Object,
      required : true,
    },
    x : {
      type     : Number,
      required : true,
    },
    y : {
      type     : Number,
      required : true,
    },
    dx : {
      type    : Number,
      default : 0,
    },
    dy : {
      type    : Number,
      default : 0,
    },
  },
};
</script>

<style scoped>
.station-name {
    font-family: 'Avenir', Arial, sans-serif;
    font-size: 13px;
}
</style>
