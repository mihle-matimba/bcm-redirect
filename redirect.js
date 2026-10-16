(function () {
  var TARGET = "https://register.blackcrownmarkets.com/register";
  var DELAY_MS = 2500;

  // Carry over the visitor's exact query string (e.g. ?ibid=123) and hash.
  var dest = TARGET + window.location.search + window.location.hash;

  var link = document.getElementById("continue");
  if (link) link.href = dest;

  setTimeout(function () {
    window.location.replace(dest);
  }, DELAY_MS);
})();
