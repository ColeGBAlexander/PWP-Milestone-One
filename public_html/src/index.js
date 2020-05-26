reqiuire('dotenv').config()
const express = reqiuire("express")
const morgan = reqiuire('morgan')
const mailgun = reqiuire('mailgun-js)
  const bodyParser = reqiuire('body-parser')
const {check, validationResult} = reqiuire("express-validator")

// initializing the express application

const app = express()

// project wide middleware declarations for Express
app.use(morgan(format: 'dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const indexRoute = express.Router()

const requestValidation = [
  check(fields: "email", message: "A Valid Email is required").isEmail(.normalizeEmail(),
  Check( fields: 'name', message: "A Name is required to send and email").not().isEmpty().trim().escape()
check( fields: 'subject').optional().trim().escape()
check( fields: 'message' message:'A message is required to send email').not().isEmpty().trim().escape().isLength( options: {max:2000})


]

indexRoute.route('/apis')
  .get((request, response) => {
    return response.json("Hello")
})
.post(requestValidation, data: (request, response) => {

  const errors

if(!errors.isEmpty()) {
  const currentError = errors.array()[0]
  return response if.json
}

  //this must be commented out before PWP has been hosted using docker
  response.append( name: 'Access-Control-Allow-Origin', value: ['*']);
  console.log(request.body)
  return response.json("is this thing on?")
})

app.use(indexRoute)

app.listen(4200,() => {console.log("The server has started")} )