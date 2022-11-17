# Crea Front-end Assignment

This project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Used Libs
- [React Redux ](https://react-redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Saga](https://redux-saga.js.org/)

## Installation

### With Docker

The project has two docker file one of them for client and other one for api.

```bash
docker-compose -f docker-compose.dev.yml up
```

Api Url
```bash
'http://localhost:3080'
```

Client Url
```bash
'http://localhost:3000'
```

### Without Docker

#### Client
```bash
 npm install
 npm start
```
#### Backend
```bash
 cd /api
 npm install
 npm start
```
### Test
```bash
 npm run test
```

### FUTURE TODOS:
- [x] Tests Minor
- [x] Eslint fixes
- [x] Pre-commit script for linter
- [ ] Real Backend Instead Of Fake Json Server
- [ ] Refresh Auth Token Endpoint

