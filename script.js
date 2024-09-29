// Contact Us
function kirim(){
    var name = document.getElementById("kolom-nama")
    var umur = document.getElementById("kolom-umur")
    var lakilaki = document.getElementById("kolom-sex1")
    var perempuan = document.getElementById("kolom-sex2")
    var email = document.getElementById("kolom-email")
    var country = document.getElementById("kolom-negara")
    var message = document.getElementById("kolom-pesan")
    var setuju = document.getElementById("kolom-setuju")
    var error = document.getElementById("error")

    if(name.value == ""){
        error.innerHTML = "Nama lengkap harus diisi!"
        alert("Nama lengkap harus diisi!")
    }else if(umur.value < 17){
        error.innerHTML = "Anda harus minimal berumur 17 tahun!"
        alert("Anda harus minimal berumur 17 tahun!")
    }else if(!(lakilaki.checked || perempuan.checked)){
        error.innerHTML = "Anda harus memilih gender!"
        alert("Anda harus memilih gender!")
    }else if(!(email.value.endsWith("@watchgoods.com"))){
        error.innerHTML = "Email harus berakhiran @watchgoods.com!"
        alert("Email harus berakhiran @watchgoods.com!")
    }else if(country.value == ""){
        error.innerHTML = "Anda harus mengisi asal negara!"
        alert("Anda harus mengisi asal negara!")
    }else if(message.value.length<15 || message.value.length>500){
        error.innerHTML = "Anda harus menulis pesan 15-500 karakter!"
        alert("Anda harus menulis pesan 15-500 karakter!")
    }else if(!(setuju.checked)){
        error.innerHTML = "Anda harus setuju!"
        alert("Anda harus setuju!")
    }else{
        error.innerHTML = "Anda berhasil mengirim pesan!"
        alert("Anda berhasil mengirim pesan!")
    }
}

// Products
document.addEventListener('DOMContentLoaded', function(){
    const kolomProduk = document.querySelector('#kolom-produk');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');
  
    let lebarKolom = kolomProduk.getBoundingClientRect().width;
  
    next.addEventListener('click', () => {
      kolomProduk.scrollLeft += lebarKolom;
    });
  
    previous.addEventListener('click', () => {
      kolomProduk.scrollLeft -= lebarKolom;
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const kolomProduk1 = document.querySelector('#kolom-produk1');
    const next1 = document.querySelector('#next1');
    const previous1 = document.querySelector('#previous1');
  
    let lebarKolom1 = kolomProduk1.getBoundingClientRect().width;
  
    next1.addEventListener('click', () => {
      kolomProduk1.scrollLeft += lebarKolom1;
    });
  
    previous1.addEventListener('click', () => {
      kolomProduk1.scrollLeft -= lebarKolom1;
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const kolomProduk2 = document.querySelector('#kolom-produk2');
    const next2 = document.querySelector('#next2');
    const previous2 = document.querySelector('#previous2');
  
    let lebarKolom2 = kolomProduk2.getBoundingClientRect().width;
  
    next2.addEventListener('click', () => {
      kolomProduk2.scrollLeft += lebarKolom2;
    });
  
    previous2.addEventListener('click', () => {
      kolomProduk2.scrollLeft -= lebarKolom2;
    });
});

// Homapage
document.addEventListener('DOMContentLoaded', function(){
  const slides = document.querySelector('#slides');
  const nextBanner = document.querySelector('#next-banner');
  const previousBanner = document.querySelector('#previous-banner');

  nextBanner.addEventListener('click', () => {
    const bannerWidth = slides.firstElementChild.clientWidth;
    const scrollPosition = slides.scrollLeft + bannerWidth;
    slides.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });

  previousBanner.addEventListener('click', () => {
    const bannerWidth = slides.firstElementChild.clientWidth;
    const scrollPosition = slides.scrollLeft - bannerWidth;
    slides.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  });
});


