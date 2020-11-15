<template>
  <g class="station-mark__wrapper">
    <transfer-station
      v-if="stationData && isTransfer"
      :cx="coordinatesAndType.coordinates.cx"
      :cy="coordinatesAndType.coordinates.cy"
      :name="stationData.name_translit"
      :color="color"/>
    <non-transfer-station
      v-if="stationData && !isTransfer"
      :x1="coordinatesAndType.coordinates.x1"
      :y1="coordinatesAndType.coordinates.y1"
      :x2="coordinatesAndType.coordinates.x2"
      :y2="coordinatesAndType.coordinates.y2"
      :name="stationData.name_translit"
      :color="color"/>
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

    computed : {
        isTransfer() {
            return this.coordinatesAndType.stationType === 'transfer';
        },
        color() {
            return colorGetter(this.stationData.lineId);
        },
    },

    methods : {
        colorGetter,
    },
};
</script>

<style>
.station-mark__wrapper {
    cursor: pointer;
}
</style>
