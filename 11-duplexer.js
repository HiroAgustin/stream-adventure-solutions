;(function (childProces, duplexer)
{
  'use strict';

  module.exports = function (cmd, args)
  {
    var proc = childProces.spawn(cmd, args);

    return duplexer(proc.stdin, proc.stdout);
  };

}(require('child_process'), require('duplexer')));
