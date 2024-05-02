# jwt-authorization-using-node-express-js
JST(JSON Web Token) Authorization | Express JS

1. Clone the project
2. instll the necessary package using ```npm i```
3. Then start ```npm start```

For login [Method : POST]
```http://localhost:4000/api/login```

Body Data
```{"username": "ashok"}```

![image](https://github.com/goldenashok/jwt-authorization-using-node-express-js/assets/13637127/19138ec3-48cc-4b16-bf03-9b58016fbb7e)

Calling other API with Authorization token
```http://localhost:4000/api/producted```

Need to pass Authorization token in the header link below image
![image](https://github.com/goldenashok/jwt-authorization-using-node-express-js/assets/13637127/bdb176d0-da82-4313-9f21-4fc5e1409652)

