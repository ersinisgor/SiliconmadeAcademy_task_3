
const imgThumbnails = document.querySelectorAll(".img-thumbnail");


imgThumbnails.forEach(img => {
    img.addEventListener("click", function (e) {
        const modalImage = document.getElementById("modalImage");
        const imageSource = e.target.src;

        modalImage.setAttribute("src", imageSource);
    
        openModel();
    })
});


function openModel() {
    let modal = new bootstrap.Modal(document.getElementById("showImage"));
    modal.show();
}


