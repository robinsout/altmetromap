export default ( lineId ) => {
    const getColor = {
        '1'  : '#da2128',
        '2'  : '#48b85e',
        '3'  : '#0078bf',
        '4'  : '#0db0e6',
        '5'  : '#8a4f35',
        '6'  : '#f58220',
        '7'  : '#8e489c',
        '8'  : '#fedd00',
        '8a' : '#fedd00',
        '9'  : '#a1a2a3',
        '10' : '#b4d344',
        '11' : '#79cdcd',
        '12' : '#acbfe3',
        '14' : '#da2228',
    };

    return getColor[lineId];
};
