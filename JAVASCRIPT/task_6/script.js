window.addEventListener('keydown', function(event) {
    const keyE = event.key === 'e' || event.key === 'E';
    const keyS = event.key === 's' || event.key === 'S';
    const isCtrlKey = event.ctrlKey;

    if (isCtrlKey && keyE) {
        event.preventDefault();
        toggleEditMode();
    } else if (isCtrlKey && keyS) {
        event.preventDefault();
        saveChanges();
    }
});

function toggleEditMode() {
    const contentDiv = document.getElementById("content");
    const editModeTextarea = document.getElementById("edit-mode");

    if (contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
        editModeTextarea.style.display = "none";
    } else {
        contentDiv.style.display = "none";
        editModeTextarea.style.display = "block";
        editModeTextarea.value = contentDiv.textContent.trim();
        editModeTextarea.focus();
    }
}

function saveChanges() {
    const contentDiv = document.getElementById("content");
    const editModeTextarea = document.getElementById("edit-mode");

    contentDiv.textContent = editModeTextarea.value.trim();

    toggleEditMode();
}