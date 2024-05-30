import express from 'express';
import fs from 'fs';

const app = express();
const port = 4000;

// Some partner data
const partners = {}

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

// Route to fetch partners data
app.get('/', (req, res) => {
  fs.readFile('./backend/src/partners.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading partners data');
    }
    // Parse JSON data
    const partners = JSON.parse(data);
    res.status(200).send(partners);
  });
});

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})
