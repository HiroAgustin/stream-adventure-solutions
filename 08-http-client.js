;(function (request)
{
  'use strict';

  process.stdin
    .pipe(request.post('http://localhost:8000'))
    .pipe(process.stdout);

}(require('request')));
