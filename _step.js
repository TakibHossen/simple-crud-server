/**
 * Mongodb Conception
 * ----------------------
 * 1. create account
 * 2. create an user with password
 * 3. whiteList ip address
 * 4. database> connect> driver> node> show all code
 * 5. change the password the uri
 * ----------------------------
 * 1. create---vite
 * 2. app.post ('/users'/ async (req, res) => {})
 * 3. make the function async to use await inside it
 * 4. make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await usersCollection.insertOne(user)
 * 7. res.send(result)
 * ---------------------------------
 * CLIENT
 * ------------
 * 1. create fetch
 * 2. add second patrameter as an object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': 'application/json'}
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * -----------------
 * READ MANY
 * ----------------
 * 1. create a cursor = usersCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * -------------------------
 * DELETE
 * -----------------------
 * 1. 
 * ** */