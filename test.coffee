test = require "prova"
NiceModule = require "./index.coffee"

niceModule = new NiceModule arg: "nice"

test "is nice", (t) ->
  t.plan 1
  t.equal niceModule.arg, "nice"
