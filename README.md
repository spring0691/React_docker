# React_docker
- This project is configures a React development environment using Docker.  
- You can manage node_modules through containers and proceed with react development without installing node in your local environment.
- Node_modules required for development are stored in the container, and the rest are managed local with mounted.

# Node image
node:16.20.2-slim

# How to install
1.Git clone this project  
2.Place development project under the "projects" directory(Not including node_modules)  
3.Command 
```
bash print_docker-compose.sh projects 8
```   
4.Write "volumes" in docker-compose.yml  
```
ex)
services:
  
  react_projects:
    volumes:
        - ./project/react_default/package-lock.json:/projects/react_default/package-lock.json
        - ./project/react_default/package.json:/projects/react_default/package.json
        - ./project/react_default/public:/projects/react_default/public
        - ./project/react_default/src:/projects/react_default/src

        - ./project/react_tutorial/package-lock.json:/projects/react_tutorial/package-lock.json
        - ./project/react_tutorial/package.json:/projects/react_tutorial/package.json
        - ./project/react_tutorial/public:/projects/react_tutorial/public
        - ./project/react_tutorial/src:/projects/react_tutorial/src
```   
5.Command 
```
bash print_Dockerfile.sh projects package.json,package-lock.json
```  
6.Write "COPY" and "RUN" in Dockfile  
```
ex)
COPY ./project/react_default/package-lock.json /projects/react_default/package-lock.json
COPY ./project/react_default/package.json /projects/react_default/package.json
RUN cd /projects/react_default && npm install

COPY ./project/react_tutorial/package-lock.json /projects/react_tutorial/package-lock.json
COPY ./project/react_tutorial/package.json /projects/react_tutorial/package.json
RUN cd /projects/react_tutorial && npm install
```
6.Command 
```
docker compose up -d --build
```  

# How to use  
- Start app  
 ```
 docker exec react_projects sh -c "cd /projects/react_default && PORT=3001 nohup npm start"
 ```   
 Check http://localhost:3001/[http://localhost:3001/] and Command ```Crtl + c ```  return to terminal 
- Stop app  
```
docker exec -it react_projects /bin/bash 
```   
```
lsof -i:3001  //check PID
```  
```
kill 0000 //PID number that React app on port 3001
```

- Start container  
Container runs and waits for the react app start command  
```
docker start react_projects
```  
- Stop container  
All react apps running inside containers are down  
```
docker stop react_projects
```  
