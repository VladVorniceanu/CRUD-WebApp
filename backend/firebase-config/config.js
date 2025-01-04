var admin = require("firebase-admin");

var serviceAccount = require("../../../crud-project-tic-firebase-adminsdk-1bc8y-72208b0bfc.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()
module.exports = db
