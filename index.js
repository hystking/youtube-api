// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = (function() {
    function _Class(arg) {
      var ref;
      ref = arg != null ? arg : {}, this.d = ref.d, this.w = ref.w;
      if (this.w == null) {
        this.w = window;
      }
      if (this.d == null) {
        this.d = document;
      }
      this.resolves = [];
      this.isReady = false;
      this.loadStarted = false;
      this.YT = null;
    }

    _Class.prototype._load = function() {
      var firstScriptTag, tag;
      if (this.loadStarted) {
        return;
      }
      this.loadStarted = true;
      this.w.onYouTubeIframeAPIReady = (function(_this) {
        return function() {
          var i, len, ref, resolve, results;
          _this.isReady = true;
          _this.YT = _this.w.YT;
          ref = _this.resolves;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            resolve = ref[i];
            results.push(resolve(_this.YT));
          }
          return results;
        };
      })(this);
      tag = this.d.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      firstScriptTag = (this.d.getElementsByTagName("script"))[0];
      return firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    _Class.prototype.load = function() {
      return new Promise((function(_this) {
        return function(resolve) {
          if (!_this.loadStarted) {
            _this._load();
          }
          return _this.ready().then(resolve);
        };
      })(this));
    };

    _Class.prototype.ready = function() {
      return new Promise((function(_this) {
        return function(resolve) {
          if (_this.isReady) {
            return resolve(_this.YT);
          } else {
            return _this.resolves.push(resolve);
          }
        };
      })(this));
    };

    return _Class;

  })();

}).call(this);
