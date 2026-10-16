(function () {
  var BASE = "https://register.blackcrownmarkets.com";
  var DELAY_MS = 2500;

  // /login goes to the new login page; everything else goes to register.
  var path = /^\/login\/?$/.test(window.location.pathname) ? "/login" : "/register";

  // Forward exactly what the visitor's URL has: their query string and hash,
  // or nothing at all if there are none. Nothing is stored or added.
  var dest = BASE + path + window.location.search + window.location.hash;

  var link = document.getElementById("continue");
  if (link) link.href = dest;

  setTimeout(function () {
    window.location.replace(dest);
  }, DELAY_MS);
})();
