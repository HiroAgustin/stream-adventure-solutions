;(function (ws)
{
  'use strict';

   ws('ws://localhost:8000').pipe('hello\n');

}(require('websocket-stream')));
