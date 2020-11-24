<template>
  <g>
    <text
      :x="x + 20"
      :y="y + 18"
      class="station_name">{{ names.nameTranslit }}</text>
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
    },
};
</script>

<style>
.station-name {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
}
</style>
