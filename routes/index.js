var express = require('express');
var router = express.Router();


// Load .env
require('dotenv').config();
// Import the Google Cloud Vision library
const vision = require('@google-cloud/vision');
// Create a client
const client = new vision.ImageAnnotatorClient()


async function quickstart() {
  // Performs label detection on the image file
  const [result] = await client.labelDetection('./public/images/bmw_vision_future_luxury_car.jpg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
}



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Vision API' });
});




module.exports = router;
