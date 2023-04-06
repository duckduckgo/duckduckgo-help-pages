// Pixels
// ------------------
//
// Concerned about your privacy? We do not store IP addresses, and we do not create unique cookies.
// See: https://duck.co/help/privacy/atb
//
// Adapted from https://github.com/duckduckgo/Casper/blob/master/assets/js/pixels.js
//
// Pixel format:
// -------------
// Link click: helppages.link.[source].[article].[link]

(function ready(fn) {
  document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn);
})(function () {
  // -------------------------
  // I. Initialization & Setup
  // -------------------------

  // Most of the time we don't want a pixel firing
  // several times throughout the document so we use another
  // key-value object to keep track if a pixel has been fired or not.
  var seenList = {};

  // Page Info:
  // ----------
  // This section is where we get the information that we need about the page.
  // - Where the visitor came from.
  // - The path of the page.

  // Get source param in the URL.
  var source = /s=([^&\s]*)/.exec(location.search);
  source = source && source[1] && decodeURIComponent(source[1]) || 'direct';

  // Get path to uniquely identify pixel.
  var pathname = location.pathname.replace(/\/(.+)\//, '$1');
  pathname = pathname === '/' ? 'home' : pathname;

  // --------------------
  // II. Helper Functions
  // --------------------

  // Helper: firePixel
  // -------------------
  // This function abstracts away the logging details.
  function firePixel() {
    // This is the path to our pixels for logging certain events on
    // the page.
    var pixelUrl = 'https://improving.duckduckgo.com/t/helppages_';
    var args = [].slice.call(arguments); //data + '_' + source + '_' + pathname;
    var options = args.pop();
    var concat = args.join('_');
    var pixelPath = pixelUrl + concat;
    if (options && options.once && seenList[concat]) {
      return;
    } else if (options && options.once) {
      seenList[concat] = true;
    }

    // We use the Beacon API if it's available for more accurate logging.
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API
    if ('sendBeacon' in navigator) {
      navigator.sendBeacon(pixelPath);
    } else {
      // Otherwise we go with creating an <img> element
      // and setting the src attribute with the GIF.
      var pixel = document.createElement('img');
      pixel.setAttribute('src', pixelPath);

    }
  }

  // Helper: sanitizeUrl
  // Sanitzes a given URL by removing unsafe characters.
  // E.g. 'https://reddit.com/r/duckduckgo' -> 'https-reddit-com-r-duckduckgo'
  function sanitizeUrl(url) {
    return url
      // strip leading/trailing slash
      .replace(/^\/|\/$/, '')
      // strip unsafe chars for grafana
      .replace(/[^a-z0-9_-]+/ig, '-')
      // strip underscores as well
      .replace(/_/g, '-');
  }

  // --------------------
  // III. Event Listeners
  // --------------------

  // Link Clicks
  // -----------
  // Fire pixels when links within the article are clicked.
  // Example: helppages.link.quora.https-spreadprivacy-com.google-filter-bubble-study
  Array.prototype.slice.call(document.querySelectorAll('article a'), 0).forEach(function (link) {
    link.addEventListener('click', function () {
      firePixel('link', sanitizeUrl(source), sanitizeUrl(pathname), sanitizeUrl(link.href), {
        once: false
      });
    });
  });
});