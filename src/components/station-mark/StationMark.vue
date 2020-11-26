<template>
  <g
    v-if="stationData.renderData"
    class="station-mark__wrapper">
    <transfer-station-point
      v-if="isTransfer"
      :cx="stationData.renderData.pointCoordinates.cx"
      :cy="stationData.renderData.pointCoordinates.cy"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <non-transfer-station-point
      v-if="!isTransfer"
      :x1="stationData.renderData.pointCoordinates.x1"
      :y1="stationData.renderData.pointCoordinates.y1"
      :x2="stationData.renderData.pointCoordinates.x2"
      :y2="stationData.renderData.pointCoordinates.y2"
      :is-on-route="stationData.renderData.isOnRoute"
      :color="color"/>
    <text-elements
      v-if="!stationData.renderData.hideName"
      :names="names"
      :x="textCoordinates.x"
      :y="textCoordinates.y"
      :dx="textCoordinates.dx"
      :dy="textCoordinates.dy" />
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

        // refactor it!
        textCoordinates() {
            const deltaTextCoordinates = this.stationData.renderData.textCoordinates
                ? {
                    dx : this.stationData.renderData.textCoordinates.dx,
                    dy : this.stationData.renderData.textCoordinates.dy,
                }
                : {
                    dx : 0,
                    dy : 0,
                };

            return this.isTransfer
                ? {
                    x : this.stationData.renderData.pointCoordinates.cx,
                    y : this.stationData.renderData.pointCoordinates.cy,
                    ...deltaTextCoordinates,
                }
                : {
                    x : this.stationData.renderData.pointCoordinates.x1,
                    y : this.stationData.renderData.pointCoordinates.y1,
                    ...deltaTextCoordinates,
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

<style scoped>
.station-mark__wrapper {
    cursor: pointer;
}
</style>
