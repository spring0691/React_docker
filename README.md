# React_docker
This project is configures a React development environment using Docker.  
You can manage node_modules through containers and proceed with react development without installing node in your local environment.

# Node image
node:16.20.2-slim

# How to install
1.Git clone this project  
2.Command ```bash print_volumes.sh react_app 8```   
3.Copy path and paste to docker-compose.yml  
4.Command ```docker compose up --build```  
5.Check the react page loads http://localhost:3000/  

# How to use
- Node_modules required for development are stored in the container, and the rest are managed local with mounted.  
- Use other project instead of "react_app"
