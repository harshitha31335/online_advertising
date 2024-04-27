const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.5t743aw.mongodb.net/counselling?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

async function initializeDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('counselling');

    const userCol = db.collection('register');
    const adCol = db.collection('ads');


    await initializeAdCollection(adCol);

    
    app.post('/register', async (req, res) => {
      try {
        await userCol.insertOne(req.body);
        res.status(201).send('User Data Inserted Successfully');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });

    app.post('/signin', async (req, res) => {
      const { email, password } = req.body;
      const user = await userCol.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      res.json({ username: user.name });
    });

    

    app.get('/ads', async (req, res) => {
      try {
        const ads = await adCol.find().toArray();
        res.json(ads);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    });

    // Other routes can be added here

    app.listen(8080, () => {
      console.log('Express server is running');
    });
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

async function initializeAdCollection(adCol) {
  const count = await adCol.countDocuments();
  if (count === 0) {
    await adCol.insertOne({ test: 'test' });
    await adCol.deleteOne({ test: 'test' });
    console.log('Initialized "ads" collection');
  } else {
    console.log('"ads" collection already exists');
  }
}

initializeDatabase();