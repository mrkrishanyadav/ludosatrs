document.getElementById('openPopup').onclick = function() {
    document.getElementById('popup').style.display = 'block';
}

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}
