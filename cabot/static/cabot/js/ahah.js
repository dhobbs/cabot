'use strict';
/**
 * Created by darren on 13/02/2016.
 */
function refreshActiveComponent(sourceUri, containerId, contentId, interval, cb) {
    interval = interval || 10000;
    $(document).ready(function() {poll(sourceUri, containerId, contentId, interval)});

    function poll(sourceUri, containerId, contentId, interval) {
        setTimeout(function() {
            refreshComponent(sourceUri, containerId, contentId, cb);
            poll(sourceUri, containerId, contentId, interval);
        }, interval);
    }

    function refreshComponent(sourceUri, containerId, contentId, cb) {
        //console.log("Refreshing: " + contentId + " from " + sourceUri);
        $("#"+containerId).load(sourceUri + " #" + contentId, function() {
            //console.log("Container refreshed");
        }, cb);
    }
}