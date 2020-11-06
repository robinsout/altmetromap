<template>
  <g>
    <transfer-station
      v-if="stationData && coordinatesAndType.stationType === 'transfer'"
      :cx="coordinatesAndType.coordinates.cx"
      :cy="coordinatesAndType.coordinates.cy"
      :name="stationData.name_translit"/>
    <non-transfer-station
      v-if="stationData && coordinatesAndType.stationType === 'nonTransfer'"
      :x1="coordinatesAndType.coordinates.x1"
      :y1="coordinatesAndType.coordinates.y1"
      :x2="coordinatesAndType.coordinates.x2"
      :y2="coordinatesAndType.coordinates.y2"
      :name="stationData.name_translit"/>
  </g>
</template>

<script>
import colorGetter from '../../utils/colorGetter.js';
import TransferStation from './Transfer.vue';
import NonTransferStation from './NonTransfer.vue';

export default {

    components : {
        transferStation    : TransferStation,
        nonTransferStation : NonTransferStation,
    },

    props : {
        stationData : {
            type     : Object,
            required : true,
        },
        coordinatesAndType : {
            type     : Object,
            required : true,
        },
    },

    methods : {
        getColor( lineId ) {
            return colorGetter(lineId);
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
.cls-22 {
    stroke: red;
    stroke-miterlimit: 10;
    stroke-width: 5px;
    fill: none;
}
</style>
