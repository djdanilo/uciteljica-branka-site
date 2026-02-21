// Simple JS for menu toggle and search placeholder functionality
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if(btn){
    btn.addEventListener('click', function(){
      if(nav.style.display === 'flex'){ nav.style.display = 'none'; }
      else{ nav.style.display = 'flex'; nav.style.flexDirection = 'column'; }
    });
  }
  var search = document.getElementById('site-search');
  if(search){
    search.addEventListener('keypress', function(e){
      if(e.key === 'Enter'){
        alert('Претраживање није повезано — користите прегледач да нађете по страници.'); // simple placeholder
      }
    });
  }
});


console.log("Учитељица Бранка - страница учитана успешно.");