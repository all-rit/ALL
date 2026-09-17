/* 
  Handles deciding which Enviornment is being used
  passes that to the Version Service to get the correct
  Version to be returned through the controller
*/
const env = process.env.ENVIRONMENT
let type = "";

if (env == "production"){
  //PRODUCTION
  type = "prod"
}
else if (env == "staging"){
  //STAGING
  type = "staging"
}
else{
  //LOCAL
  type = "branch"
}

module.exports = {type};