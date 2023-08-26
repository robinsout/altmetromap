const kievGraph = require('../../mapsdata/moscow-graph');

const fs = require('fs');
const inputFile = fs.readFileSync('./points_msc.txt', 'utf8').toString().split('\n');

const mapper = (nodeData) => {
  const parameters = nodeData.split('\t');


  return {
    id           : parameters[0],
    nodeTranslit : parameters[3],
  };
};

const prepared = inputFile.map(mapper);

const reducer = (acc, node) => {

  if ((!node.id || !node.nodeTranslit) && acc.length > 0) {
    return acc;
  }

  const id = node.id;
  const nodeTranslit = node.nodeTranslit;

  const nodeIndex = kievGraph.findIndex( item => ((item.id).toString() === id));

  if (nodeIndex > -1) {
    const newNode = kievGraph[nodeIndex];

    newNode.nodeTranslit = nodeTranslit;
    acc.push(newNode);
  }

  return acc;
};

const result = prepared.reduce(reducer, []);

console.log(JSON.stringify(result));

