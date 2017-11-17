//window.onload = function() {

    // https://jsfiddle.net/qpd63j7r/

    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 00,    label: 'developering', 
                    title: 'developering is collaboration and communication',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/developering'},
        {id: 01,    label: 'friendly code', 
                    title: 'code is meant to be read, not written',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/friendly-code'},
        {id: 02,    label: 'apps', 
                    title: 'app = {data, logic} + User Interaction',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/apps'},                    
        {id: 03,    label: 'git and Hub', 
                    title: 'tools for sharing, collaborating, and preserving',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/apps'},                                        
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 00, to: 01, arrows: 'to'},
        {from: 01, to: 02, arrows: 'to'},
        {from: 01, to: 03, arrows: 'to'},
        {from: 02, to: 04, arrows: 'to'},
        {from: 03, to: 05, arrows: 'to'},
        {from: 04, to: 05, arrows: 'to'},
        {from: 04, to: 06, arrows: 'to'},
        {from: 05, to: 07, arrows: 'to'},
        {from: 06, to: 07, arrows: 'to'},
        {from: 05, to: 11, arrows: 'to'},
        {from: 07, to: 08, arrows: 'to'},
        {from: 07, to: 09, arrows: 'to'},
        {from: 07, to: 10, arrows: 'to' }
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
