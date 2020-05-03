import { readFileSync } from 'fs';
const inputFile = readFileSync('./kiev_graph', 'utf8').toString().split('\n');

const mapper = (nodeData) => {
    const parameters = nodeData.split('\t');

    
    return {
        id      : parameters[0],
        node_id : parameters[1],
        time    : parameters[2],
    };
};

const prepared = inputFile.map(mapper);

const reducer = (acc, node) => {
    if (!node.id || !node.node_id || !node.time) {
        return acc;
    }

    const id = node.id;
    const node_id = node.node_id;
    const time = node.time;

    const nodeIndex = acc.findIndex( item => item.id === node.id && !!item.id );

    if (nodeIndex > -1) {
        acc[nodeIndex].links.push({
            node_id,
            time,
        });
    }
    else {
        acc.push({
            id,
            links : [
                {
                    node_id,
                    time,
                },
            ],
        });
    }
    
    return acc;
};

const result = prepared.reduce(reducer, []);

console.log(JSON.stringify(result));
