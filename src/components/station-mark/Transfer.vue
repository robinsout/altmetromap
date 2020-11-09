<template>
  <g>
    <circle
      :cx="cx"
      :cy="cy"
      :stroke="'green'"
      class="cl-2"
      r="8.3"/>
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
            type     : Number,
            required : true,
        },
        cy : {
            type     : Number,
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

.cl-2 {
    stroke-miterlimit: 10;
    stroke-width: 3px;
    fill: #fff;
}
</style>>
