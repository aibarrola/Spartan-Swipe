# Spartan-Swipe

Starting the appplication:\
1.) Start up the terminal within the Spartan-Swipe folder\
2.) cd into SpartanSwipe-Backend\
2.1) The dependencies should all be in the package.jsons, but if they're not, cd into SpartanSwipe-Backend and npm install the regular dependencies, afterwards cd into the client folder and install the regular dependencies for the front end\
2.2) The developer dependencies probably won't be imported as I tested it myself, but to you can run and check. If not, enter: npm i -D concurrently (while you are in SpartanSwipe-Backend)\
2.3) /config/default.json is using my mongodb, not sure if it matters but you can make your own db/collections and edit the config as such\
3.) To run the application, type and enter (while you are in SpartanSwipe-Backend): npm run ss\
(npm run ss basically runs both server (backend) with client (frontend) and ss is an acronym for spartanswipe that I made up)

Backend

Regular Dependencies (npm i ... ... ...)\
express: main framework for backend\
express-validator: data validator\
bcryptjs: password encryption\
config: global variables\
gravatar: profile avatars\
jsonwebtoken: jwt needs token to pass for validation\
mongoose: interactive layer ontop of the database\
request: module that allows us to make http request to API (used for having having github repos on website but probably won't need for this project)

Developer Dependencies (npm i -D ... ... ...)\
nodemon: constantly refreshes server (almost making it live where we can see changes happen as we code)\
concurrently: allows backend server to run with frontend react servers at the same time

To run the server (After changing scripts: "start": "node server", "server": "nodemon server"): npm run server\
The localhost PORT will be localhost:####, #### being whatever is set as the const PORT in server.js

React Frontend (client)

npx create-react-app client: creates react on a folder called client

Regular Dependencies (npm i ... ... ...)\
axios: make HTTP requests (global headers)\
react-router-dom: router\
redux\
react-redux\
redux-thunk\
redux-devtools-extension\
moment: date and time library\
react-moment: able to utilize moment inside react\
uuid: node package that generates a random universal id

react-tinder-card: used for the frontend cards for their movement (swiping motion)