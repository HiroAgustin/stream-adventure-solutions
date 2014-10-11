;(function (through, split)
{
  'use strict';

  var even = false;

  process.stdin
    .pipe(split())
    .pipe(through(function (buf)
    {
      this.queue(buf.toString()[even ? 'toUpperCase' : 'toLowerCase']() + '\n');

      even = !even;
    }))
    .pipe(process.stdout);

}(require('through'), require('split')));
