<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img
      id="moscow"
      class="img"
      usemap="#moscow"
      style="max-width: 100%; width: auto; height: auto;  "
      alt
      src="../assets/metromap_translated_msc.png"
    >
  </div>
</template>

<script>
import moscowGraph from '../mapsdata/moscow-graph';
import pathFinder from '../utils/pathFinder';

export default {
    name : 'MoscowMap',

    data() {
        return {
            msg : 'Moscow Map',
        };
    },

    mounted() {
        console.log(this.findPath(moscowGraph(), 5, 50));
    },

    methods : {
        findPath() {
            return pathFinder(moscowGraph(), 5, 50);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
