const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


// port to listen on
const PORT = 3030;

// server static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// parse incoming data (form data, JSON)
app.use(express.urlencoded({ extended: true }));

// function to store user data in database.json
function storeUserData(data) {
  let existingData = [];
  try {
    const jsonData = fs.readFileSync('database.json', 'utf8');
    existingData = JSON.parse(jsonData) || [];
  } catch (error) {
    // ignore errors if file doesn't exist
  }

  existingData.push(data);
  fs.writeFileSync('database.json', JSON.stringify(existingData, null, 2));
}

// route to handle form submission
app.post('/submit-form', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const otherNames = req.body.otherNames;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const gender = req.body.gender;

  const userData = { firstName, lastName, otherNames, email, phoneNumber, gender };
  storeUserData(userData);

  res.send('Form submitted successfully!');
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})