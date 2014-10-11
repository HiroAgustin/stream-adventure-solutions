;(function (http, through)
{
  'use strict';

  var server = http.createServer(function (req, res)
  {
    if (req.method === 'POST')
      req
        .pipe(through(function (buf)
        {
          this.queue(buf.toString().toUpperCase());
        }))
        .pipe(res);
  });

  server.listen(process.argv[2]);

}(require('http'), require('through')));
