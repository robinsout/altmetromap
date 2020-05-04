import nGraph from 'ngraph.graph';
import nPath from 'ngraph.path';

const prepareGraph = ( rawGraph ) => {
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

    rawGraph.map(prepare);

    return graph;
};

const findPath = ( rawGraph, fromNode, toNode ) => {
    const pathFinder = nPath.aStar( prepareGraph(rawGraph), {
        distance(fromNode, toNode, link) {
            return link.data;
        },
    });

    return pathFinder.find(fromNode, toNode);
};

export default ( rawGraph, fromNode, toNode ) => {

    const mapper = (pathNode) => rawGraph.find(item => item.id === pathNode.id);
    const { path, distance } = findPath( rawGraph, fromNode, toNode );

    const resultPath = path.map(mapper);

    return {
        path     : resultPath,
        distance : distance,
    };
};


