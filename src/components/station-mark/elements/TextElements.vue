<template>
  <g>
    <text
      :x="x"
      :y="y"
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
