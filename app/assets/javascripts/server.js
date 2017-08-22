var webPush = require('web-push');

webPush.setGCMAPIKey(process.env.GCM_API_KEY); //PEGAR UMA GCM

module.exports = function(app, route) {
  app.post(route + 'register', function(req, res) {
 
    res.sendStatus(201);
  });

  app.post(route + 'sendNotification', function(req, res) {
    setTimeout(function() {
      webPush.sendNotification({
        endpoint: req.query.endpoint,
        TTL: req.query.ttl,
      })
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        res.sendStatus(500);
        console.log(error);
      })
    }, req.query.delay * 1000);
  });
};