const backdrop = document.querySelector('.backdrop');

function closeModal() {
    backdrop.classList.add('is-hidden'); // Remove the dot here
}

// Correct way to add event listener
backdrop.addEventListener('click', closeModal);

setTimeout(() => {
    console.log("modal");
    backdrop.classList.remove('is-hidden'); // Remove the dot here
}, 6000);