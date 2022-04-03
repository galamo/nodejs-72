# Nodejs
## Run your nodejs file
`node <FileName>`


# NPM - node package manager
- `npm init`


# Ex - 1    
1. Run the current nodejs script in your local machine
by executing `npm run dev`
2. Add new function - calc(num1,num2) , return the sum of 2 numbers
3. Run your new function 


# Ex - 2 
1. Create new Module  - new function - calc(num1,num2) , return the sum of 2 numbers
2. use the module in your main script


# Homework 
1. Create a module which recieve Array of values ( strings )
the module will return the distinct values from the array.

input:
```javascript
["gal","zipor","gal"]
```
output: 
```javascript
["gal","zipor"]
```

2. on the same module, expose a function which return the number of apperances for each value

input:
```javascript
["gal","zipor","gal"]
```
output: 
```javascript
{ "gal":2, "zipor":1  }
```

3. Advanced - create a module which recive a JSON and write the json into a file.
 

# Nodejs - Main docs
https://nodejs.org/api/documentation.html

# Express - api
1. installation `npm install express`
2. require
3. use Router and Express Function
4. listen to Port


# nodemon 
- installation `npm install nodemon -g`
- config inside the package.json script: `nodemon index.js`


# EX 
1. Add new entry point for registration
#### GET /register?userName=<un>&password=<pw> 
- userName - string
- password - string

2. Add the registered user into a Server State, Array of users

3. When performing `/login` with userName&password check if the user exist and his credentials are correct and

4. Error Handling - Coming soon!

5. add the following json into your Server - from the following URL:
https://github.com/dotnet-presentations/ContosoCrafts/blob/master/src/wwwroot/data/products.json

6. add the following enctry points
### GET /products  
- return all products
### GET /products?id=<id>  
- return one product match to the Id
### GET /products?search=<stitle>  
- return all the matches products according the title


# Ex status code
return not Found in case the Id is not inside the products Array

# Ex 
1. Addnew Router to our application - router name: user
2. add the folowing functionality to user router
- GET /user - create new user user created
- GET /users-list - return all the created users 


# Lesosn modules
1. express - `npm install express`
2. .env  - `npm install dotenv`
3. body-parser `npm install body-parser`


# HomeWork - Use Postman to make the request
1. POST /register - add the userName password to an array
2. POST /login - assert the userName & password with the relevant array 
3. If user exist + password is match - response login success 200 
4. Split between errors  - userName not exist AND password not match 
5. register - user already exist - failed! 
5. POST /change-password change password - userName + currentPassword + newPassword  
6. advanced validate newPassword + newPassowrdConfirm 


# Validation Exercise - lesson_3\api
1. create /POST product entry point - adding new product to products array
2. add input validation to product creaiton envry point - name, category , price, imageUrl, description 
3. example - {name:"milk", category:"drinks/dairy/food" , ....}


# Authentication middleware
1. Add the middleware function to a centerlised location in the project
2. Add new entry point for payment /POST pay ( only for authenticated users)
3. /POST logout - delete the session from the object