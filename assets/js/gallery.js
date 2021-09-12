let modal = document.getElementById('modal');

let closeBtn = document.getElementById('modal-close');

closeBtn.onclick = () => {
    modal.style.display = 'none';
}
let moreImages = document.getElementsByClassName('more-images-item');
let previewImages = document.getElementsByClassName('img-preview');
Array.from(moreImages).forEach((el) => {
    el.onclick = () => {
        let imgItems = el.parentNode.querySelector('img');
        Array.from(imgItems).forEach((item, index) => {
            previewImages[index].src = item.src;
        });
        let img = el.querySelector('img');
        modal.style.display = 'block';
        let modalContent = modal.querySelector('.modal-content');
        modalContent.src = img.src;
        let temp = modalContent.cloneNode(true);
        modalContent.appendChild(temp, modalContent);
    }
});