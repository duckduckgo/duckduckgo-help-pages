---
layout: null
---
(function() {
    function addOrUpdateQueryParam(url, param, value) {
        if (!url || typeof url !== 'string') return url;
        
        var urlObj = new URL(url, window.location.origin);
        urlObj.searchParams.set(param, value);
        return urlObj.href;
    }
    
    
    function shouldModifyUrl(pathname) {
        if (!pathname || typeof pathname !== 'string') return false;
        var paths = ['/browser', '/mac', '/windows', '/pro', '/app', '/'];
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
                if (shouldModifyUrl(url.pathname)) {
                    link.href = addOrUpdateQueryParam(link.href, 'origin', 'funnel_help');
                } else if (url.hostname === 'play.google.com') {
                    link.href = addOrUpdateQueryParam(link.href, 'referrer', 'origin=funnel_help');
                }
            } catch (e) {
                // Invalid URL, skip this link
                console.warn('Skipping invalid URL:', link.href);
            }
        }
    }
    
    document.addEventListener('DOMContentLoaded', addOriginToLinks);
})();
