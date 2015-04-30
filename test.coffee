test = require "prova"
#YoutubeAPI = 

youtubeAPI = do require "./index.coffee"

videoDom = document.createElement "div"
videoDom.id = "video"
document.body.appendChild videoDom

test "can load api", (t) ->
  t.plan 1
  youtubeAPI
    .load()
    .then (YT) ->
      t.equal typeof YT, "object"

test "can load video", (t) ->
  t.plan 1
  youtubeAPI
    .ready()
    .then (YT) ->
      new YT.Player "video",
        videoId: "kvpyz6MUa1w"
        playerVars:
          autoplay: 1
        events:
          onReady: ->
            t.pass()
