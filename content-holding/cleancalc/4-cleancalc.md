# CLEANCALC v.4.* - Express Middleware
In this step you'll build a very simple express app.  Users will send their arguments as params in the URL and will get answers as strings - aka not as html.

Suggested steps:
1. Create a hello-world express app.
2. Require your cleancalc into the app.js.
3. Create a middleware (or middlewares, your call) that uses your cleancalc object.  It will recieve args from 'req.params' and will return values using 'res.send'.
