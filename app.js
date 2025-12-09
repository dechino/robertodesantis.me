(function () {
  const ts = new Date().toISOString();
  document.getElementById('ts').textContent = 'Rendered at: ' + ts;
  document.getElementById('build').textContent = ts;

  fetch('/api/status.json', { cache: 'no-store' })
    .then(r => r.json())
    .then(data => {
      document.getElementById('api').textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('api').textContent = 'API error: ' + err;
    });
})();
