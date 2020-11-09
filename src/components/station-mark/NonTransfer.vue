<template>
  <g>
    <line
      :x1="x1"
      :y1="y1"
      :x2="x2"
      :y2="y2"
      :stroke="'green'"
      class="cl-22"/>
    <text
      :x="x2 + 20"
      :y="y2 + 18"
      class="station_name">{{ name }}</text>
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

.cl-22 {
    stroke-miterlimit: 10;
    stroke-width: 5px;
    fill: none;
}

</style>
