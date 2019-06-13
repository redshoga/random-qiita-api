const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const allUrl = require("./url.json");

exports.get = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const randomIdx = Math.floor(Math.random() * allUrl.length);
    response.status(200).json({
      url: allUrl[randomIdx]
    }).end();
  })
});
