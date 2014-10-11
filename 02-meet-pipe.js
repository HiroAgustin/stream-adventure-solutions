;(function (fs)
{
  'use strict';

  fs.createReadStream(process.argv[2]).pipe(process.stdout);

}(require('fs')));
