const content = document.querySelector(".Content-div");
const input = document.querySelector(".input-div");
const buton = document.querySelector("#buton");
const girisform = document.querySelector("#input");
const ul = document.querySelector(".list");
const temizle = document.querySelector(".temizle");
let bildirim = document.querySelector(".notification");
let info = document.querySelector(".info");
let sayac = 0;
function ekle() {

   if (girisform.value != "") {

      sayac += 1;
      let sil = document.createElement("div");
      sil.style.position = "fixed";
      sil.textContent = "sil";
      sil.classList.add('sil');
      let li = document.createElement('li');
      li.textContent = sayac + "." + girisform.value;
      ul.style.fontsize = "2em";
      li.style.height = "1.5em";



      /* eklenilen satır silme butonunuda satırın yanında tanımlanması için satırın içine eklenmesi gerekiyor aşağıda ekledim*/

      li.appendChild(sil);

      ul.appendChild(li);
      girisform.value = "";



      /*sil butonuna tıklanan satırdaki satırı silen kod*/
      function secilenisil() {

         sayac--;
         bildirim.textContent = "Seçtiğiniz satır silindi";
         setTimeout(() => { bildirim.textContent = " " }, 3000);
         li.remove();
      }
      sil.addEventListener('click', secilenisil);



      /* Listeye yeni bir satır eklendiğinde eklendi bildirimi gelip 2 saniye sonra silinen bildirim kodu*/
      bildirim.textContent = "Eklendi";
      setTimeout(() => { bildirim.textContent = " " }, 3000);







   }
}


function remove() {
   sayac--;
   ul.textContent = "";
   bildirim.textContent = "Liste temizlendi";
   setTimeout(() => { bildirim.textContent = " " }, 3000);
}




temizle.addEventListener('click', remove);
buton.addEventListener('click', ekle);
