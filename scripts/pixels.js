/*
Pixels
-------

Concerned about your privacy? We do not store IP addresses, and we do not create unique cookies.
See: https://duck.co/help/privacy/atb

Pixel format:
help.[kebab-pathname].load
help.[kebab-pathname].click?link-url=

Examples:
help.company-advertising-and-affiliates.load
help.company-advertising-and-affiliates.click?link-url=https-reddit-com-r-duckduckgo
*/

(function ready(fn) {
    document.readyState !== "loading"
        ? fn()
        : document.addEventListener("DOMContentLoaded", fn);
})(function () {
    var externalLinkAllowList = {
        "https://about.ads.microsoft.com/en-us/h/a/microsoft-advertising": true,
    };

    var hasFired = {}; // Fire pixels only once
    var pathname = location.pathname.replace(/\/(.+)\//, "$1");
    var basePixelUrl =
        "https://improving.duckduckgo.com/t/help_" +
        sanitize(pathname === "/" ? "home" : pathname);

    /**
     * Fires the pixel
     * @param {event, extraData} ops
     */
    function firePixel(event, extraData) {
        extraData = extraData || {};

        var pixelUrl = basePixelUrl + "_" + event;
        var extraDataString = "";

        Object.keys(extraData).forEach(function (extraDataKey) {
            extraDataString =
                extraDataString +
                (extraDataString === "" ? "?" : "&") +
                encodeURIComponent(sanitize(extraDataKey)) +
                "=" +
                encodeURIComponent(sanitize(extraData[extraDataKey]));
        });

        pixelUrl = pixelUrl + extraDataString;

        if (hasFired[pixelUrl]) {
            return;
        }
        hasFired[pixelUrl] = true;

        if ("sendBeacon" in navigator) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API
            navigator.sendBeacon(pixelUrl);
        } else {
            // sendBeacon fallback: img tag
            var pixel = document.createElement("img");
            pixel.setAttribute("src", pixelUrl);
        }
    }

    function sanitize(str) {
        return (
            str
                // strip leading/trailing slash
                .replace(/^\/|\/$/, "")
                // strip unsafe chars for grafana
                .replace(/[^a-z0-9_-]+/gi, "-")
                // strip 'duckduckgo-help-pages-'
                .replace(/^duckduckgo-help-pages-/, "")
                // strip underscores as well
                .replace(/_/g, "-")
        );
    }

    // --------------------
    // Event Listeners
    // --------------------

    // Page loads: Fire here as we're already in an onload event
    firePixel("load");

    // Link clicks: Fire when links within the article are clicked
    Array.prototype.slice
        .call(document.querySelectorAll("article a"), 0)
        .forEach(function (link) {
            link.addEventListener("click", function () {
                var href = link.href;
                var hostname = link.hostname;
                if (
                    hostname === location.hostname ||
                    hostname === "help.duckduckgo.com" ||
                    externalLinkAllowList[href]
                ) {
                    // internal link clicks and allow-listed external links can send the href
                    firePixel("click", { "link-url": href });
                } else {
                    // otherwise we don't send the href but fire a click pixel for measuring engagement
                    firePixel("click");
                }
            });
        });
});
