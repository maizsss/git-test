/*jslint browser: true*/
/*global console, Framework7, alert, Dom7*/

/**
 * A plugin for Framework7 to show black little toasts
 *
 * @author www.timo-ernst.net
 * @license MIT
 */
Framework7.prototype.plugins.toast = function (app, globalPluginParams) {
  'use strict';

  var Toast = function (text, iconhtml, options) {
    var self = this,
        $$ = Dom7,
        $box;
    //if(options === null){
    //  var options = {
    //    hold: 1500
    //  }
    //}


    function hideBox($curbox) {
      if ($curbox) {
        $curbox.removeClass('fadein').transitionEnd(function () {
          $curbox.remove();
        });
      }
    }

    this.show = function (show) {
      if (show) {
        var clientLeft,
            $curbox;

        // Remove old toasts first if there are still any
        $$('.toast-container').off('click').off('transitionEnd').remove();
        $box = $$('<div class="toast-container show">');

        // Add content
        $box.html('<div class="toast-icon">' + iconhtml + '</div><div class="toast-msg">' + text + '</div>');

        // Add to DOM
        clientLeft = $box[0].clientLeft;
        $$('body').append($box);

        // Hide box on click
        $box.click(function () {
          hideBox($box);
        });

        // Dirty hack to cause relayout xD
        clientLeft = $box[0].clientLeft;

        // Fade in toast
        $box.addClass('fadein');


        // Automatically hide box after few seconds
        if(options.hasOwnProperty("hold")){
          $curbox = $box;
          setTimeout(function () {
            hideBox($curbox);
          }, options.hold);
        }


      } else {
        hideBox($$('.toast-container'));
      }
    };

    return this;
  };

  app.toast = function (text, iconhtml, options) {
    return new Toast(text, iconhtml, options);
  };

};