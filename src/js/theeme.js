const themeContainer = document.querySelector('.container-theems');
const themeSwitch = document.getElementById('switch');

themeContainer.addEventListener('change', onThemeChanges);

function onThemeChanges(e) {
    if (e.target.nodeName === 'INPUT') {
        const isChecked = e.target.checked;
        toggleTheme(isChecked);
    }
}

function toggleTheme(isChecked) {
    if (isChecked) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
}