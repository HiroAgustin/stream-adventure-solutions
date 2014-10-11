;(function (through)
{
  'use strict';

  process.stdin
    .pipe(through(function (buf)
    {
      this.queue(buf.toString().toUpperCase());
    }))
    .pipe(process.stdout);

}(require('through')));
