/* eslint-disable */
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <img
      id="moscow"
      class="img"
      usemap="#moscow"
      style="max-width: 100%; width: auto; height: auto;  "
      alt
      src="../assets/metromap_translated_msc.png"
    > -->
    <svg
      viewBox="-200 -50 1989.29 2104.19">
      <moscow-lines/>
      <g
        id="stations"
        data-name="stations">
        <station-mark
          v-for="station in stationsGraph"
          :stationData="getStationData(station.id)"
          :key="station.id"
          @click.native="handleClick(station.id)"/>
      </g>
    </svg>
  </div>
</template>

<script>
import moscowGraph from '../mapsdata/moscow-graph';
import moscowRenderData from '../mapsdata/render/moscow-render-data';
import pathFinder from '../utils/pathFinder';
import StationMark from './station-mark/StationMark.vue';
import MoscowLines from './lines/MoscowLines.vue';

export default {
    name : 'MoscowMap',

    components : {
        StationMark,
        MoscowLines,
    },

    data() {
        return {
            msg           : 'Moscow Map',
            startId       : 0,
            destinationId : 0,
            route         : {},
            stationsGraph : this.getStationsGraph(),
        };
    },

    methods : {
        pathFinder,
        getStationsGraph() {
            const stationsDataMapper = (node) => {
                const stationRenderData = moscowRenderData.find( point => point.id === node.id );

                if (!stationRenderData) {
                    console.log('Node has no render data, id:', node.id);

                    return node;
                }

                node.renderData = stationRenderData;

                return node;
            };

            return moscowGraph.map(stationsDataMapper);
        },

        getStationData( id ) {
            return this.stationsGraph.find( station => station.id === id);
        },

        handleClick( stationId ) {
            if (!this.startId) {
                this.startId = stationId;

                return;
            }
            if (!this.destinationId) {
                this.destinationId = stationId;
                if (this.route.path) {
                    this.renderRoute();
                }
                this.route = this.pathFinder(this.stationsGraph, this.startId, this.destinationId);
                this.renderRoute('show');

                return;
            }
            if (this.startId && this.destinationId) {
                this.clearRoute();
                this.startId = stationId;

                return;
            }
        },

        clearRoute() {
            this.startId = 0;
            this.destinationId = 0;
            this.renderRoute();
        },

        renderRoute( action = '' ) {
            const renderer = ( station ) => {
                station.renderData.isOnRoute = action === 'show';
            };

            this.route.path.reverse().map(renderer);
        },
    },
};
</script>

<style scoped>
.cls-1, .cls-2 {
    stroke-miterlimit: 10;
    stroke-width: 3px;
    fill: #fff;
    stroke : red;
    cursor: pointer;
}

.added-station {
    stroke : black;
}
</style>
