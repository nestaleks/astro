const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

const filterContainer = document.querySelector(".screenshots__category-list"),
 galleryItems = document.querySelectorAll(".screenshots__images-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("screenshots__category-item")){
   	 // deactivate existing active 'screenshots__category-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'screenshots__category-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
