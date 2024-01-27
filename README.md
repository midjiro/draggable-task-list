# Task List

Web app with simple user interface for storing and managing daily tasks.

## Screenshots

![](./screenshots/desktop.png)
![](./screenshots/mobile.png)

## How to set up on local machine

1. Clone Repository

   `git clone https://github.com/midjiro/task-list.git`

2. Cd to cloned repo

   `cd task-list`

3. Install dependencies

   `npm install`

4. Run json-server

   `npx json-server api/db.json --port 3001`

5. Create an .env file and configure the following variables

   `REACT_APP_SERVER_URI = "JSON-Server URL"
REACT_APP_TITLE = "App Title"`

6. You're ready to run!

   `npm start`
