const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/requestList', {
  useNewUrlParser: true
});

const multer = require('multer')
const upload = multer({
  //dest: '/var/www/html/creative4.chinheihelamanlee.com/images/',
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const requestSchema = new mongoose.Schema({
  location: String,
  description: String,
  assign: String,
  status: String,
  path: String,
});

const Request = mongoose.model('Request', requestSchema);

app.get('/api/requests', async (req, res) => {
  try {
    let requests = await Request.find();
    res.send(requests);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/requests', async (req, res) => {
  const request = new Request({
    location: req.body.location,
    description: req.body.description,
    assign: req.body.assign,
    status: req.body.status,
    path: req.body.path,
  });
  try {
    await request.save();
    res.send(request);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/requests/:id', async (req, res) => {
  try {
    await Request.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/requests/:id', async (req, res) => {
  try {
    let request = await Request.findOne({
      _id: req.params.id
    });
    request.location = req.body.location;
    request.description = req.body.description;
    request.assign = req.body.assign;
    request.status = req.body.status;
    await request.save();
    res.send(request);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
