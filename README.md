# Basic info

This app combines two sub-apps, one is client and the second one server. Client runs on React and has to show data coming from the back-end which is written with nodeJS and returns simple API, so the client can fetch the data and populate it to the table. By clicking on the "Pokaż szczegóły" the modal will show up populating fields with the data of the selected user. When the modal shows up, the URL will change, same when you close modal the URL will change. If you copy and paste the URL like /users/details/3 to the browser and user with ID: 3 will exist, then the modal will automatically show up with provided data, if the ID: 3 will not exist, in exchange will be shown modal informing that user with given ID doesn't exist, after closing this modal, the URL will change to /users

## How to run?

To run this app you have togo to server directory and type "npm run dev" - this command will launch the server. When the server is up, move to client directory and type "npm run start" - this command will launch the client.

## Commands

### `npm run dev`

Launches the server in /server directory

### `npm run start`

Launches the client in /client directory