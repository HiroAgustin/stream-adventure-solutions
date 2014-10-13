;(function (combiner, split, through, zlib)
{
  'use strict';

  module.exports = function ()
  {
    var library = []
      , index = ''
      , type = ''
      , name = ''
      , obj = null;

    return combiner(
      split()
    , through(
        function (buf)
        {
          if (!buf)
            return;

          obj = JSON.parse(buf);
          type = obj.type;
          name = obj.name;

          if (type === 'genre')
          {
            if (library.length)
              this.queue(JSON.stringify(library[index]) + '\n');

            index = library.length;

            library[index] = {
              name: name
            , books: []
            };
          }

          else if (type === 'book')
            library[index].books.push(name);
        }
      , function ()
        {
          this.queue(JSON.stringify(library[index]) + '\n');
          this.queue(null);
        }
      )
    , zlib.createGzip()
    );
  };

}(require('stream-combiner'), require('split'), require('through'), require('zlib')));
