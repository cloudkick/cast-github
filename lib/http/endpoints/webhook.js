var log = require('cast/util/lib');

function handlePayload(req, res) {
  // @TODO
  var payload, parsed;
  payload = req.params.payload;

  try {
    parsed = JSON.parse(payload);
  }
  catch (err) {
    log.error('Failed to parse payload: %s', err);
    res.writeHead(500, {});
    res.end();
    return;
  }

  res.writeHead(200, {});
  res.end();
}

var routes = [
  // 'method', 'path', middleware1, middleware2, ..., handler
  ['GET', '/webhook', handlePayload]
];

exports.routes = routes;
