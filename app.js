const express          = require("express"),
      applicationRoute = require("./routes/registrationRoutes"),
      bodyParser       = require("body-parser"),
      port             = process.env.PORT || 8080,
      cors             = require("cors"),
      app              = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use("/",applicationRoute);

app.listen(port, () => {
    console.log(`Application is listening on port ${port}!`)
});