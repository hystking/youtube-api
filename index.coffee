_YoutubeAPI = class
  constructor: ({@d, @w}={})->
    @w ?= window
    @d ?= @w.document or document
    @resolves = []
    @isReady = false
    @loadStarted = false
    @YT = null

  _load: ->
    return if @loadStarted
    @loadStarted = true
    @w.onYouTubeIframeAPIReady = =>
      @isReady = true
      @YT = @w.YT
      resolve @YT for resolve in @resolves
    tag = @d.createElement "script"
    tag.src = "https://www.youtube.com/iframe_api"
    firstScriptTag = (@d.getElementsByTagName "script")[0]
    firstScriptTag.parentNode.insertBefore tag, firstScriptTag

  load: -> new Promise (resolve) =>
    @_load() unless @loadStarted
    @ready().then resolve
  
  ready: -> new Promise (resolve) =>
    if @isReady
      resolve @YT
    else
      @resolves.push resolve

module.exports = (p) -> new _YoutubeAPI p
