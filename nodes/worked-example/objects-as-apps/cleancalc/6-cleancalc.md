# CLEANCALC v.6.* - Separation of Concerns
Deciding what paths a user can access and writing the logic for those paths are actually two different things.  Two separate concerns, so let's separate them: 
```javascript
// the old way
    // ./calc_handlers.js
        app.get('/add', (req, res) => {
                    // logic
                };
        app.get('/subtract', (req, res) => {
                    // logic
                };
        
// the better way:
    // ./controllers/calc.js
        var calc_controller = {
            add: function(req, res) {
                        // logic
                    },
            subtract: function(req, res) {
                        // logic
                    }
        };
    // ./routes/calc.js
        var calc_controller = require('../controllers/calc.js');
        app.get('/add', calc_controller.add);
        app.get('/subtract', calc_controller.subtract);
```

Why is this better?  
Because if you later want to change the behavior of your app, all you have to do is change the require path in the 'routes' file and make sure the new object has the same interface.
___
### Assignment:
Refactor version 6 to have this more modular architecture.