;(function (crypto, zlib, tar, through)
{
  'use strict';

  var parser = tar.Parse();

  parser.on('entry', function (entry)
  {
    if (entry.type === 'File')
      entry
        .pipe(crypto.createHash('md5', {
          encoding: 'hex'
        }))
        .pipe(through(null, function ()
        {
          return this.queue(' ' + entry.path + '\n');
        }))
        .pipe(process.stdout);
  });

  process.stdin
    .pipe(crypto.createDecipher(process.argv[2], process.argv[3]))
    .pipe(zlib.createGunzip())
    .pipe(parser);

}(require('crypto'), require('zlib'), require('tar'), require('through')));
