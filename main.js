const toggleBtn = document.querySelector('.navbar_togglebtn');
const list = document.querySelector('.menu_list');

toggleBtn.addEventListener('click', ()=>{
    list.classList.toggle('actvie');
});
