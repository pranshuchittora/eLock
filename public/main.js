let redirectURL = 'https://pranshuchittora.github.io'
const onLine_message = document.getElementById('connection_status')
if (navigator.onLine) {
    onLine_message.innerHTML = 'You are Online'
    setInterval(() => {
        window.location = redirectURL
    }, 1000)
} else {
    onLine_message.innerHTML = 'You are Offline'
    setInterval(() => {
        if (navigator.onLine) window.location = redirectURL
    }, 1000)
}

console.log(navigator.onLine)
