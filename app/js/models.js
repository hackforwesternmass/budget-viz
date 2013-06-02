(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  define(function(require, exports, module) {
    var $, BaseModel, Spine, _ref;

    Spine = window.Spine || require('spine');
    $ = Spine.$;
    BaseModel = (function(_super) {
      __extends(BaseModel, _super);

      function BaseModel() {
        _ref = BaseModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      BaseModel.configure.apply(BaseModel, ['Base'].concat(__slice.call(BaseModel.attributes)));

      BaseModel.tryFind = function(id) {
        var e;

        try {
          return this.find(id);
        } catch (_error) {
          e = _error;
          return null;
        }
      };

      return BaseModel;

    })(Spine.Model);
    return exports = null;
  });

}).call(this);
