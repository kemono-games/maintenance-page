import './style.css'

function checkIsPageAvailable() {
  const currentUrl = window.location.href
  fetch(currentUrl, {
    cache: 'no-cache',
    method: 'GET',
    keepalive: true,
  }).then((res) => res.status !== 503)
    .then((isAvailable) => {
      if (isAvailable) {
        window.location.reload()
      }
    })
}

// fetch data each time when the page is in the foreground.
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    checkIsPageAvailable();
  }
})
