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

import nGraph from 'ngraph.graph';
import nPath from 'ngraph.path';
import moscowGraph from '../mapsdata/moscow-graph';

export default {
    name : 'MoscowMap',

    data() {
        return {
            msg : 'Moscow Map',
        };
    },

    computed : {
        prepareGraph() {
            const graph = nGraph();
            const prepare = (node) => {
                node.links.map( link => {
                    const weight = link.time;

                    graph.addLink(
                        node.id,
                        link.node_id,
                        weight,
                    );
                });
            };

            moscowGraph().map(prepare);

            return graph;
        },
    },

    mounted() {

        const mapper = (pathNode) => moscowGraph().find(item => item.id === pathNode.id);
        const { path, distance } = this.findPath();

        console.log(path.map(mapper), distance);
    },

    methods : {
        findPath() {
            const pathFinder = nPath.aStar(this.prepareGraph, {
                distance(fromNode, toNode, link) {
                    return link.data;
                },
            });

            return pathFinder.find(5, 50);
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
