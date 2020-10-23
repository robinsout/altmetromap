<template>
  <g
    class="station-mark">
    <circle
      :cx="coordinates.x"
      :cy="coordinates.y"
      class="cls-2"
      r="7.16"/>
    <text
      :x="coordinates.x + 20"
      :y="coordinates.y - 7"
      class="station_name">{{ stationData.name_original }}</text>
    <text
      :x="coordinates.x + 20"
      :y="coordinates.y + 18"
      class="station_name">{{ stationData.name_translit }}</text>
  </g>
</template>

<script>
export default {
    props : {
        stationData : {
            type     : Object,
            required : true,
        },
        coordinates : {
            type     : Object,
            required : true,
        },
    },
};
</script>

<style>
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
</style>
