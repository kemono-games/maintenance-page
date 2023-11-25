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

// check if page is available every 10 seconds
setInterval(checkIsPageAvailable, 10 * 1000)