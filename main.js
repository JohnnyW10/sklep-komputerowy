var num=0;

function change_backgoround() {
  let baner = document.getElementById('baner');
  let help = baner.style;

  if(num === 0)  {
    help.background = "url('Img/pokoj_gamingowy2.jpg') center";
    help.backgroundRepeat = "no-repeat";
    help.backgroundSize = "cover";
    num++;
  } else if (num === 1) {
    help.background = "url('Img/baner.jpg') center";
    help.backgroundRepeat = "no-repeat";
    help.backgroundSize = "cover";
    num++;
  } else {
    help.background = "url('Img/pokoj_gamingowy.jpg') center";
    help.backgroundRepeat = "no-repeat";
    help.backgroundSize = "cover";
    num=0;
  }
}

setInterval(change_backgoround, 4000);

var help = 0;

function open_menu() {
  let menu =  document.getElementById('menu');

  if(help === 0) {
    menu.style.display = 'block';
    help++;
  } else if (help === 1) {
    menu.style.display = 'none';
    help=0;
  }
}

let click_menu = document.getElementById('burger_menu');
click_menu.addEventListener("click", open_menu);

let click_menu2 = document.getElementById('close');
click_menu2.addEventListener("click", open_menu);


