/*! *//*!
 * flexy.js v1.2.0 - "Sogeking no shima deeeeeee - One Piece"
 * ~~~~~~~~~~~~~~~~~~
 *
 * Example of use HTML:
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/x3kfyZJhC3U?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
 *
 * Example of use JS:
 * $('iframe').flexy({
 *     addcss: true,
 *     classname: 'flexy-wrapper',
 *     widescreen: false,
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2015 Achraf Chouk <achrafchouk@gmail.com>
 */

(function ($){
    "use strict";
    var Flexy = function ($el, options){
        //vars
        var _flexy = this;
        _flexy.$el = $el;
        _flexy.options = $.extend({}, options);

        //initialize
        _flexy.initialize();
    };

    Flexy.prototype.options = {};
    Flexy.prototype.$el = null;
    Flexy.prototype.$wrap = null;

    Flexy.prototype.initialize = function (){
        var _flexy = this;

        //create wrapper
        _flexy.$el.wrap('<div class="' + _flexy.options.classname + '" />');
        _flexy.$wrap = _flexy.$el.closest('.' + _flexy.options.classname);

        //add CSS to wrapper
        if (_flexy.options.addcss) {
            _flexy.addCss();
        }
    };

    Flexy.prototype.addCss = function (){
        var _flexy = this,
            _tag = _flexy.$el.prop('tagName'),
            _src = null;

        //add CSS to element
        _flexy.$el.css({
            boxSizing: 'border-box',
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
        });

        //add CSS to wrapper
        _flexy.$wrap.css({
            boxSizing: 'border-box',
            height: 0,
            overflow: 'hidden',
            paddingBottom: '67.5%',
            paddingTop: _flexy.toRem(25) + 'rem',
            position: 'relative',
        });

        //get source
        if ('OBJECT' === _tag) {
            _src = _flexy.$el.attr('data');
        }
        else if ('EMBED' === _tag || 'IFRAME' === _tag) {
            _src = _flexy.$el.attr('src');
        }
        else if ('VIDEO' === _tag) {
            _src = _flexy.$el.attr('src');

            if (typeof _src === typeof undefined || _src === false) {
                _src = _flexy.$el.find('source:first-child').attr('src');
            }
        }
        else {
            return;
        }

        //vimeo
        if (_src.match(/player\.vimeo\.com/)) {
            _flexy.options.widescreen = true;
            _flexy.$wrap.css('padding-top', 0);
        }

        //wide screens
        if (_flexy.options.widescreen) {
            _flexy.$wrap.css('padding-bottom', '56.34%');
        }
    };

    Flexy.prototype.toRem = function (length){
        var _rem = parseFloat($('html').css('font-size'));
        return (parseInt(length) / _rem);
    };

    var methods = {
        init: function (options){
            if (!this.length) {
                return false;
            }

            var settings = {
                addcss: true,
                classname: 'flexy-wrapper',
                widescreen: false
            };

            return this.each(function (){
                if (options) {
                    $.extend(settings, options);
                }

                new Flexy($(this), settings);
            });
        },
        update: function (){},
        destroy: function (){}
    };

    $.fn.flexy = function (method){
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.Flexy');
        }
    };
})(window.jQuery);
