//window.onload = function() {

    // https://jsfiddle.net/qpd63j7r/

    // create an array with nodes
    var nodes = new vis.DataSet([
        {id: 00,    label: 'developering', 
                    title: 'developering is collaboration and communication',
                    group: 'entry',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/developering.md'},
        {id: 01,    label: 'friendly code', 
                    title: 'code is meant to be read, not written',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/friendly-code.md'},
        {id: 02,    label: 'apps', 
                    title: 'app = {data, logic} + User Interaction',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/apps.md'},
        {id: 03,    label: 'git and Hub', 
                    title: 'tools for sharing, collaborating, and preserving',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/git-and-hub.md'},
        {id: 04,    label: 'understanding problems', 
                    title: 'solving problems is for noobs, real developers understand them',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/understanding-problems.md'},
        {id: 05,    label: 'pure functions', 
                    title: 'kind of like a factory',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/pure-functions.md'},
        {id: 06,    label: 'OOP in JS', 
                    title: 'single-purpose bags',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/oop-in-js.md'},
        {id: 07,    label: 'specs', 
                    title: 'how developers talk about code',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/specs.md'},
        {id: 08,    label: 'user stories', 
                    title: 'keeping the user in mind from step 0',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/user-stories.md'},
        {id: 09,    label: 'testing 101', 
                    title: 'just the basics, all the basics',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/testing-101.md'},
        {id: 10,    label: 'testing objects', 
                    title: 'testing objects is not the same as testing functions',
                    group: 'md',
                    url: 'https://github.com/jankeLearning/sample-lesson/blob/master/nodes/markdown/testing-objects.md'},
        {id: 11,    label: 'objects as apps', 
                    title: 'thinking of objects as self-contained units of user story',
                    group: 'we',
                    url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/objects-as-apps'},
        {id: 12,    label: 'model objects', 
                    title: 'not glamorous, but worth your time. we promise',
                    group: 'we',
                    url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/model-objects'},
        {id: 13,    label: 'logic vs framework', 
                    title: 'probably the most important lesson here',
                    group: 'we',
                    url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/logic-vs-framework'},
        {id: 14,    label: 'repoing', 
                    title: 'how to build useful github repos',
                    group: 'we',
                    url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/repoing'},
        {id: 15,    label: 'project planning', 
                    title: 'all your code is no good if you never write it',
                    group: 'we',
                    url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/worked-example/project-planning'},
        {id: 16,    label: 'final project', 
                    title: 'put it all together in this guided project',
                    group: 'project',
                    url: 'https://github.com/jankeLearning/sample-lesson/tree/master/nodes/projects/janke-project'},
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 00, to: 01, arrows: 'to'},
        {from: 00, to: 02, arrows: 'to'},
        {from: 00, to: 03, arrows: 'to'},
        {from: 00, to: 04, arrows: 'to'},
        {from: 01, to: 05, arrows: 'to'},
        {from: 01, to: 06, arrows: 'to'},
        {from: 02, to: 08, arrows: 'to'},
        {from: 02, to: 11, arrows: 'to'},
        {from: 03, to: 14, arrows: 'to'},
        {from: 04, to: 15, arrows: 'to'},
        {from: 05, to: 07, arrows: 'to'},
        {from: 06, to: 07, arrows: 'to'},
        {from: 07, to: 09, arrows: 'to'},
        {from: 07, to: 11, arrows: 'to'},
        {from: 07, to: 15, arrows: 'to'},
        {from: 08, to: 15, arrows: 'to'},
        {from: 09, to: 10, arrows: 'to'},
        {from: 10, to: 12, arrows: 'to'},
        {from: 11, to: 10, arrows: 'to'},
        {from: 11, to: 13, arrows: 'to'},
        {from: 12, to: 16, arrows: 'to'},
        {from: 13, to: 16, arrows: 'to'},
        {from: 14, to: 16, arrows: 'to'},
        {from: 15, to: 16, arrows: 'to'},
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
        },    
        groups: {
          'entry': { color: 'green', mass: 100 },
          'md': { color: 'blue', mass: 80 },
          'we': { color: 'purple', mass: 20 },
          'project': { color: 'red', mass: 1 }
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
