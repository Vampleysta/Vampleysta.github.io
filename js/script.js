window.addEventListener("load", function(){
    $(document).ready(function(){
        $('.carousel').carousel({
                padding: 200
        });
      });
});

function changeBg(bg, title){
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("../img/Carousel/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)){
            content.classList.add('active');
        }
    });
  document.getElementById("search-in").onkeyup = function() {
      search_animal();
  };
  function search_animal() {
     
      var query = document.getElementById("search-in").value;
  }
}