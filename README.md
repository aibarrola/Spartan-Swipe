# Spartan-Swipe

Regular Dependencies (npm i ...)\
express: main framework for backend\
express-validator: data validator\
bcryptjs: password encryption\
config: global variables\
gravatar: profile avatars\
jsonwebtoken: jwt needs token to pass for validation\
mongoose: interactive layer ontop of the database\
request: module that allows us to make http request to API (used for having having github repos on website but probably won't need for this project)

Developer Dependencies (npm i -D ...)\
nodemon: constantly refreshes server (almost making it live where we can see changes happen as we code)\
concurrently: allows backend server to run with frontend react servers at the same time

To run the server (After changing scripts: "start": "node server", "server": "nodemon server"): npm run server
