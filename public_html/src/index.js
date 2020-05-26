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

console.log(process.env)

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
  const
    const mg = mailgun( options: {apiKey: process.env.MAILGUN_API_KEY, domain: domain});

  const {email, subject, name, message} = request.body

  const mailgunData = {
    to: process.env.MAIL_RECIPIENT,
    from: 'Mailgun Sandbox <postmaster@${domain}'
  }




  const errors = validationResult(request)

if(!errors.isEmpty()) {
  const currentError = errors.array()[0]
  return response if.json
}

  //this must be commented out before PWP has been hosted using docker
  response.append( name: 'Access-Control-Allow-Origin', value: ['*']);
  console.log(request.body)
  return response.send(buffer.from("<div class='alert-success' role=alert'>Emailsuccessfully sent.</div>"))
})

app.use(indexRoute)

app.listen(4200,() => {console.log("The server has started")})