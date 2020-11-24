<template>
  <g
    v-if="stationData.renderData"
    class="station-mark__wrapper">
    <transfer-station-point
      v-if="isTransfer"
      :cx="stationData.renderData.coordinates.cx"
      :cy="stationData.renderData.coordinates.cy"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <non-transfer-station-point
      v-if="!isTransfer"
      :x1="stationData.renderData.coordinates.x1"
      :y1="stationData.renderData.coordinates.y1"
      :x2="stationData.renderData.coordinates.x2"
      :y2="stationData.renderData.coordinates.y2"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <text-elements
      :names="names"
      :x="textCoordinates.x"
      :y="textCoordinates.y" />
  </g>
</template>

<script>
import colorGetter from '../../utils/colorGetter.js';
import TransferStationPoint from './elements/TransferStationPoint.vue';
import NonTransferStationPoint from './elements/NonTransferStationPoint.vue';
import TextElements from './elements/TextElements.vue';

export default {

    components : {
        TransferStationPoint,
        NonTransferStationPoint,
        TextElements,
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
        names() {
            if (!this.stationData) {
                return 'Noname';
            }

            return {
                nameTranslit : this.stationData.name_translit,
                nameOriginal : this.stationData.name_original,
            };
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
