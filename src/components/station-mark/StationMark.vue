<template>
  <g
    v-if="stationData.renderData"
    class="station-mark__wrapper">
    <transfer-station
      v-if="isTransfer"
      :cx="stationData.renderData.coordinates.cx"
      :cy="stationData.renderData.coordinates.cy"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <non-transfer-station
      v-if="!isTransfer"
      :x1="stationData.renderData.coordinates.x1"
      :y1="stationData.renderData.coordinates.y1"
      :x2="stationData.renderData.coordinates.x2"
      :y2="stationData.renderData.coordinates.y2"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <text
      :x="textCoordinates.x + 20"
      :y="textCoordinates.y + 18"
      class="station_name">{{ stationData.name_translit }}</text>
  </g>
</template>

<script>
import colorGetter from '../../utils/colorGetter.js';
import TransferStation from './elements/TransferStation.vue';
import NonTransferStation from './elements/NonTransferStation.vue';

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
        textCoordinates() {
            if (!this.stationData.renderData) {
                return;
            }

            return this.isTransfer
                ? {
                    x : this.stationData.renderData.coordinates.cx,
                    y : this.stationData.renderData.coordinates.cy,
                }
                : {
                    x : this.stationData.renderData.coordinates.x1,
                    y : this.stationData.renderData.coordinates.y1,
                };
        },
    },

    methods : {
        colorGetter,
    },
};
</script>

<style>
.station-name {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 16px;
}

.station-mark__wrapper {
    cursor: pointer;
}
</style>
