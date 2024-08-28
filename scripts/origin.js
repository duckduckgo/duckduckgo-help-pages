---
layout: null
---
(function() {
    if (typeof URL !== 'function') {
        return;
    }

    var paths = ['/browser', '/mac', '/windows', '/pro', '/app', '/'];

    function addOrUpdateQueryParam(url, param, value) {
        if (!url || typeof url !== 'string') return url;
        
        var urlObj = new URL(url, window.location.origin);
        urlObj.searchParams.set(param, value);
        return urlObj.href;
    }
    
    
    function shouldModifyUrl(pathname, hostname) {
        if (!pathname || typeof pathname !== 'string') return false;
        if (!hostname || typeof hostname !== 'string') return false;

        if (hostname !== "duckduckgo.com") {
            return false;
        }

        for (var i = 0; i < paths.length; i++) {
            if (pathname === paths[i] || pathname.indexOf(paths[i] + '/') === 0) return true;
        }

        return false;
    }
    
    function addOriginToLinks() {
        var links = document.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            try {
                var url = new URL(link.href, window.location.origin);
                if (shouldModifyUrl(url.pathname, url.hostname)) {
                    link.href = addOrUpdateQueryParam(link.href, 'origin', 'funnel_help');
                } else if (url.hostname === 'play.google.com') {
                    link.href = addOrUpdateQueryParam(link.href, 'referrer', 'origin=funnel_help');
                } else if (url.hostname === "apps.apple.com") {
                    link.href = addOrUpdateQueryParam(link.href, 'ct', 'funnel_help')
                }
            } catch (e) {
                // Do nothing
            }
        }
    }
    
    document.addEventListener('DOMContentLoaded', addOriginToLinks);
})();
