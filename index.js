const AWS = require("aws-sdk");
const ecs = new AWS.ECS();

const params = {
    desiredCount: 0,
    service: "my-http-service"
};

ecs.updateService(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
    /*
    data = {
    }
    */
});