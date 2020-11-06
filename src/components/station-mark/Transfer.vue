<template>
  <g>
    <circle
      :cx="cx"
      :cy="cy"
      class="cls-2"
      r="7.16"/>
    <text
      :x="cx + 20"
      :y="cy + 18"
      class="station_name">{{ name }}</text>
  </g>
</template>

<script>
export default {
    props : {
        cx : {
            type     : String,
            required : true,
        },
        cy : {
            type     : String,
            required : true,
        },
        name : {
            type     : String,
            required : true,
        },
    },
};
</script>

<style scoped>
.station-name {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
}

.cls-2 {
    stroke: red;
    stroke-miterlimit: 10;
    stroke-width: 5px;
    fill: #fff;
}
</style>>
