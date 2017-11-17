//window.onload = function() {

    // https://jsfiddle.net/qpd63j7r/

    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 00,    label: 'being a developer', 
                    title: 'devving is collaboration and communication',
                    url: 'https://github.com/jankeLearning/nodes/blob/master/sepco-projects-only/00-communications.md'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 00, to: 01, arrows: 'to, middle'},
        {from: 01, to: 02, arrows: 'to, middle'},
        {from: 01, to: 03, arrows: 'to, middle'},
        {from: 02, to: 04, arrows: 'to, middle'},
        {from: 03, to: 05, arrows: 'to, middle'},
        {from: 04, to: 05, arrows: 'to, middle'},
        {from: 04, to: 06, arrows: 'to, middle'},
        {from: 05, to: 07, arrows: 'to, middle'},
        {from: 06, to: 07, arrows: 'to, middle'},
        {from: 05, to: 11, arrows: 'to, middle'},
        {from: 07, to: 08, arrows: 'to, middle'},
        {from: 07, to: 09, arrows: 'to, middle'},
        {from: 07, to: 10, arrows: 'to, middle' }
    ]);

    // options
    var options = {
        interaction:{hover:true},
        physics: {
            forceAtlas2Based: {
                gravitationalConstant: -26,
                centralGravity: 0.005,
                springLength: 230,
                springConstant: 0.18
            },
            maxVelocity: 146,
            solver: 'forceAtlas2Based',
            timestep: 0.35,
            stabilization: {iterations: 150}
        }
    };

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var network = new vis.Network(container, data, options);

    // event listener
    network.on("selectNode", function (params) {
        if (params.nodes.length === 1) {
            var node = nodes.get(params.nodes[0]);
            window.open(node.url, '_blank');
        }
    });
       
//};
