# MyNodeJsMiniHttpServer.node
is a mini http web server in JavaScript for nodes.js it contains the simplest form of a web server written in JavaScript with PUT and POST routes.
The web server can be addressed on port 3000 with curl.

There are a lot of identical or similar examples on the net that demonstrate the same thing, so the code is nothing special. I put extra emphasis on minimalism.

But what I didn't find in the net for the corresponding examples and what cost me extremely much time was to find the right curl statements, to set req.body correctly (see https://stackoverflow.com/questions/75422093/res-body-is-always-empty-in-node-js-express-post-routine).

the curl statements:

`curl http://localhost:3000/get`

`curl -X POST -H "content-type: application/json" -d "{\"message\":\"11111\"}"  http://localhost:3000/post`

I tested it on node 16.19.0 and 18.12.1 on Wondows and Linux.