// get the button
const themeToggleButton = document.getElementById('theme-toggle');

// toggle between modes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // save mode
    if (document.body.classList.contains('dark-theme')){
        localStorage.setItem('theme, dark');
    } else {
        localStorage.setItem('theme, light');
    }
}

// load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// toggle detect
themeToggleButton.addEventListener('click', toggleTheme);

// load theme upon site launch
loadTheme();