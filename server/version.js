/* 
  Handles deciding which Enviornment is being used
  passes that to the Version Service to get the correct
  Version to be returned through the controller
*/
const host = process.env.HOST
const env = process.env.ENVIRONMENT
let type = "";

if (env == "production" && host == "all.rit.edu"){
  //PRODUCTION
  type = "prod"
}
else if (env == "production" && host == "ball.rit.edu"){
  //STAGING
  type = "staging"
}
else{
  //LOCAL
  type = "branch"
}

module.exports = {type};