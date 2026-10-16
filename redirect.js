(function () {
  var BASE = "https://register.blackcrownmarkets.com";
  var DELAY_MS = 2500;

  // /login goes to the new login page; everything else goes to register.
  var path = /^\/login\/?$/.test(window.location.pathname) ? "/login" : "/register";

  // Carry over the visitor's exact query string (e.g. ?ibid=123) and hash.
  var dest = BASE + path + window.location.search + window.location.hash;

  var link = document.getElementById("continue");
  if (link) link.href = dest;

  setTimeout(function () {
    window.location.replace(dest);
  }, DELAY_MS);
})();
