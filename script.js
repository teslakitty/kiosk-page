// Function to update time every second
function updateTime() {
    document.getElementById('time').innerText = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);