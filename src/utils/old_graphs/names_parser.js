const kievGraph = require('../../mapsdata/moscow-graph');

const fs = require('fs');
const inputFile = fs.readFileSync('./points_msc.txt', 'utf8').toString().split('\n');

const mapper = (nodeData) => {
    const parameters = nodeData.split('\t');


    return {
        id            : parameters[0],
        name_translit : parameters[3],
    };
};

const prepared = inputFile.map(mapper);

const reducer = (acc, node) => {

    if ((!node.id || !node.name_translit) && acc.length > 0) {
        return acc;
    }

    // console.log(node.id);

    const id = node.id;
    const name_translit = node.name_translit;

    const nodeIndex = kievGraph.findIndex( item => ((item.id).toString() === id));

    if (nodeIndex > -1) {
        const newNode = kievGraph[nodeIndex];

        newNode.name_translit = name_translit;
        acc.push(newNode);
    }

    return acc;
};

const result = prepared.reduce(reducer, []);

console.log(JSON.stringify(result));

