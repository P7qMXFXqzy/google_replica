This software has been made for study purposes only and in now way has the intention of breaking any copyright laws or terms.

DEPENDENCIES
Before running the application, be sure that you have MySQL and NodeJS installed and that you have recreated the MySQL database as it is inside the "database recreation" txt file (the rows values is not important, you can define the values you want to use, but the tables and columns must be the same as inside the file). 
Afterwards, inside the API file, where the "connection" variable is defined, make sure to change "user" and "password" to the values you set when you installed MySQL. 
Finally, you need to install the node dependencies, open the "google_replica" folder (inside of the project, where "package.json" is located), open a command prompt and run the command "npm install", this command will automatically install all the dependencies needed to run the project.

HOW TO RUN
Open the main folder of the project (where "api.js" is located) and run the command "node api.js", this will start executing the api in the localhost 9000. Afterwards open the "google_replica" folder and open a second command prompt (do not close the previous one where the API is running) and run the command "npm start", this will start running the application and the application's page will open in a new tab.
