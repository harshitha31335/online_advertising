const express = require('express'); 
const cors = require('cors'); 
const { MongoClient, ObjectId } = require('mongodb'); 
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
 
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.5t743aw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') 
client.connect(); 
 
const db = client.db('counselling'); 
const col = db.collection('register'); 
 
app.post('/register', async (req, res) => { 
    try { 
        await col.insertOne(req.body); 
        console.log(req.body); 
        res.send("Data Inserted Successfully"); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send("Internal Server Error"); 
    } 
}); 
 
app.post('/signin', async (req, res) => { 
    const { email, password } = req.body; 
    console.log(email); 
    const user = await col.findOne({ email }); 
    console.log(user.email, user.password, password); 
    if (!user || !(password === user.password)) { 
        return res.status(401).json({ message: 'Invalid email or password' }); 
    } 
    res.json({ username: user.name }); // Return the username upon successful login 
}); 
 
 
app.get('/retrieve', async (req, res) => { 
    try { 
        const result = await col.find().toArray(); 
        console.log(result); 
        res.json(result); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send("Internal Server Error"); 
    } 
}); 
 
app.get('/', (req, res) => { 
    res.send('<center><h1>Hello KL University</h1></center>'); 
}); 
 
app.get('/about', (req, res) => { 
    res.send('<h1>This is About Page</h1>'); 
}); 
 
app.get('/contact', (req, res) => { 
    res.send('<h1>This is Contact Page</h1>'); 
}); 
 
app.get('/home', (req, res) => { 
    res.send('<h1>This is Home Page</h1>'); 
}); 
 
app.put('/users/:id', async (req, res) => { 
    try { 
        const { id } = req.params; 
        const { name, role, email, password } = req.body; 
        const result = await col.updateOne({ _id: new ObjectId(id) }, { $set: { name, role, email, password } }); 
        res.send('updated'); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send("Internal Server Error"); 
    } 
}); 
 
app.delete('/users/:id', async (req, res) => { 
    try { 
        const { id } = req.params; 
        const result = await col.deleteOne({ _id: new ObjectId(id) }); 
        res.json({ message: 'deleted successfully' }); 
    } catch (error) { 
        console.error(error); 
        res.status(500).send("Internal Server Error"); 
    } 
}); 
 
app.listen(8080, () => { console.log('Express server is running'); });
