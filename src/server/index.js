var path = require('path')
const express = require('express')
/* Middleware*/
const bodyParser = require('body-parser');

const app = express()

app.use(express.static('dist'))



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi")

const dotenv = require('dotenv')
dotenv.config()

// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });


console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


const textArray =[];

function PostuserText(req,res){

   textapi.sentiment({
        'text': req.body.UserText
      }, function(error, response) {
        if (error === null) {
          details = {
            textPolarity :response.polarity,
            subjectivity : response.subjectivity,
            text : response.text,
            polarityConfidence :response.polarity_confidence,
            subjectivityConfidence: response.subjectivity_confidence
          }
          textArray.push(details);
          res.sendStatus(200);
        }
      }); 
     
   
   
   
}

app.post('/test',PostuserText)

function getAylienData(req,res){
  res.status(200).send(textArray[(textArray.length-1)]);
    console.log(textArray[(textArray.length-1)]);

}

app.get('/test',getAylienData);
