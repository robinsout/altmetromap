<template>
  <g
    v-if="stationData"
    class="station-mark__wrapper">
    <transfer-station
      v-if="isTransfer && stationData.renderData"
      :cx="stationData.renderData.coordinates.cx"
      :cy="stationData.renderData.coordinates.cy"
      :name="stationData.name_translit"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <non-transfer-station
      v-if="!isTransfer && stationData.renderData"
      :x1="stationData.renderData.coordinates.x1"
      :y1="stationData.renderData.coordinates.y1"
      :x2="stationData.renderData.coordinates.x2"
      :y2="stationData.renderData.coordinates.y2"
      :name="stationData.name_translit"
      :is-on-route="stationData.renderData.isOnRoute"
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
    },

    computed : {
        isTransfer() {
            if (!this.stationData.renderData) {
                return;
            }

            return this.stationData.renderData.stationType === 'transfer';
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
