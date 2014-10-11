;(function (concat)
{
  'use strict';

  process.stdin.pipe(concat(function (text)
  {
    process.stdout.write(text.toString().split('').reverse().join(''));
  }));

}(require('concat-stream')));
