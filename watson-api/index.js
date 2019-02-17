const port = 8080;
const express = require("express");
const app = express();

// Watson Config
var watson = require("watson-developer-cloud");
var cors = require("cors");

var service = new watson.AssistantV2({
  iam_apikey: "0wBj57LvPA0qX-MSowPiBCArSt_8mPfTvIj-MGPox4zF",
  version: "2018-11-08",
  url: "https://gateway-wdc.watsonplatform.net/assistant/api"
});

const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Watson API Service running");
});

app.get("/requestSession", (req, res) => {
  service.createSession(
    {
      assistant_id: "47aaf709-3ec8-4cf3-8146-0d518bf67b00"
    },
    function(err, response) {
      if (err) {
        console.error(err);
      } else {
        console.log(JSON.stringify(response, null, 2));
        console.log(response);

        sess_response = response.session_id;
        console.log("Session Reponse: " + sess_response);
        res.send(sess_response);
      }
    }
  );
});

app.post("/ask", (req, res) => {
  console.log(req.body);

  if (!req.body.sessionId) {
    res.sendStatus(400);
    res.error("No Session ID provided");
  }
  service.message(
    {
      assistant_id: "47aaf709-3ec8-4cf3-8146-0d518bf67b00",
      session_id: req.body.sessionId,
      input: {
        message_type: "text",
        text: req.body.data
      }
    },
    function(err, response) {
      if (err) {
        console.log("error:", err);
      } else {
        console.log(JSON.stringify(response, null, 2));
        let r = "error";
        switch (response.output.generic[0].response_type) {
          case "option":
            if (response.output.entities.length > 0) {
              r = [
                response.output.generic[0].description,
                response.output.entities[0].value
              ];
            } else {
              r = [response.output.generic[0].description, ""];
            }
            break;
          case "text":
            if (response.output.entities.length > 0) {
              r = [
                response.output.generic[0].text,
                response.output.entities[0].value
              ];
            } else {
              r = [response.output.generic[0].text, ""];
            }
            break;
          default:
            break;
        }
        console.log(r);

        res.send(r);
      }
    }
  );
});

const lport = process.env.PORT || port;
console.log(lport);

app.listen(lport, err => {
  console.log("Started listening on", port);
});
