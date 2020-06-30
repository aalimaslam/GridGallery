const previewImages = document.querySelectorAll('.container img');
const popup = document.querySelector('.popup');
const fullImage = document.querySelector('.full-image')
const caption = document.querySelector('.caption');
 
previewImages.forEach(p => {
    p.addEventListener('click', ()=>{
        popup.classList.add('open');
        fullImage.classList.add('open');
        const originalSource= p.getAttribute('data-original')
        fullImage.src=originalSource
        const altText=p.alt;
        caption.textContent=altText;
    })
});


popup.addEventListener('click',(e)=>{
if (e.target.classList.contains('popup')){
    popup.classList.remove('open');
    fullImage.classList.remove('open')
}
})