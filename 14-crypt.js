;(function (crypto)
{
  'use strict';

  process.stdin
    .pipe(crypto.createDecipher('aes256', process.argv[2]))
    .pipe(process.stdout);

}(require('crypto')));
