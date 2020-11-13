<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img
      id="moscow"
      class="img"
      usemap="#moscow"
      style="max-width: 100%; width: auto; height: auto;  "
      alt
      src="../assets/metromap_translated_spb.png"
    >
  </div>
</template>

<script>
export default {
    name : 'SpbMap',

    data() {
        return {
            msg : 'Saint Petersburg Map',
        };
    },

    methods : {

        // getStations() {
        //     const circles = [].filter.call(document.getElementsByTagName('circle'), circle => {
        //         const takeIt = circle.r.baseVal.valueAsString === '8.3';

        //         if (circle.r.baseVal.valueAsString === '8.3') {
        //             circle.addEventListener('click', this.addStation);

        //             // circle.setAttribute('visibility', 'hidden');
        //         }

        //         return takeIt;
        //     });

        //     const lines = [].filter.call(document.getElementsByTagName('line'), line => {
        //         const shortEnough = line.getTotalLength() < 25;

        //         if (shortEnough) {
        //             line.addEventListener('click', this.addStation);

        //             // line.setAttribute('visibility', 'hidden');

        //             return true;
        //         }

        //         return false;
        //     });

        //     console.log('Circles : ', circles.length, 'Lines : ', lines.length);
        // },

        // addStation( event ) {

        //     // event.srcElement.setAttribute('visibility', 'hidden');
        //     event.srcElement.classList.add('added-station');

        //     if (!localStorage.getItem('stations')) {
        //         localStorage.setItem('stations', JSON.stringify([]));
        //     }

        //     const getId = () => {
        //         const stations = JSON.parse(localStorage.getItem('stations'));

        //         return stations.length > 0 ? stations[stations.length - 1].id + 1 : 1;
        //     };

        //     const addNewStation = ( newStation ) => {
        //         const stations = JSON.parse(localStorage.getItem('stations'));

        //         stations.push(newStation);
        //         localStorage.setItem('stations', JSON.stringify(stations));
        //     };

        //     if (event.target.tagName === 'circle') {
        //         addNewStation({
        //             id          : getId(),
        //             stationType : 'transfer',
        //             coordinates : {
        //                 cx : event.target.cx.baseVal.valueAsString,
        //                 cy : event.target.cy.baseVal.valueAsString,
        //             },
        //         });
        //     }

        //     if (event.target.tagName === 'line') {
        //         addNewStation({
        //             id          : getId(),
        //             stationType : 'nonTransfer',
        //             coordinates : {
        //                 x1 : event.target.x1.baseVal.valueAsString,
        //                 y1 : event.target.y1.baseVal.valueAsString,
        //                 x2 : event.target.x2.baseVal.valueAsString,
        //                 y2 : event.target.y2.baseVal.valueAsString,
        //             },
        //         });
        //     }
        // },
    },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
