;(function (duplexer, through)
{
  'use strict';

  module.exports = function (counter)
  {
    var counts = {}

      , write = function write (row)
        {
          var country = row.country;

          if (!(country in counts))
            counts[country] = 0;

          counts[country]++;
        }

      , end = function end ()
        {
          counter.setCounts(counts);
        };

    return duplexer(through(write, end), counter);
  };

}(require('duplexer'), require('through')));
