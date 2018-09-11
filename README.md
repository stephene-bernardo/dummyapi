# dummyapi
A rest api that would return dummy response

# Getting Started

## Prerequisites

install node *tested working on 8.9.3 

## Installing

First, clone this repository 

then in the cloned directory run 
```
npm install
```

then launch the server by running 
```
npm run server
```

after running you could try to type any api request to the server

for example:
```
curl -X GET http://localhost:3000/ 
```
* this would respond a default 200 status code

another example to modify the return response
```
curl -X POST \
  http://localhost:3000/setReturnValue \
  -H 'content-type: application/json' \
  -d '{"statuscode": 201,"body": "some modified text"}'
```
  then when calling the get request
  ```
  curl -X GET http://localhost:3000/
  ```
  * this would return a statuscode "200" and a body "some modified text" 
