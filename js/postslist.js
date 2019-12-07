function openDeleteModel() {
    document.getElementById("confirmer-modal").style.display = "block";
}

function closeConfirmerDialog() {
    document.getElementById("confirmer-modal").style.display = "none";
}

function deletePost(action) {
    document.getElementById("confirmer-modal").style.display = "none";
    console.log(action);
}