// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};

const rek2 = document.getElementById("rek2");
const salin2 = document.getElementById("salin2");

salin2.onclick = () => {
  rek2.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};

const rek3 = document.getElementById("rek3");
const salin3 = document.getElementById("salin3");

salin3.onclick = () => {
  rek3.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    title: "Nomor Dana Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};

const rek4 = document.getElementById("rek4");
const salin4 = document.getElementById("salin4");

salin4.onclick = () => {
  rek4.select();
  document.execCommand("copy");
  Swal.fire({
    icon: "success",
    title: "Nomor Gopay Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};

// copy end

// waktu start
const countDownDate = new Date("Juny 28, 2025 00:00:00").getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Carasingkat").innerHTML = "EXPIRED";
  }
}, 1000);
// waktu end

// modal start
window.onload = function () {
  document.getElementById("klikmodal").click();
};
// modal end

// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "-";

// hover blur effect
$('.blur').mouseenter(function(){
  $('.blur').css('filter','blur(5px)'); // Blurs each .blur div
  $(this).css('filter','blur(0px)');    // Removes blur from the currently hovered .blur div
})
$('.blur').mouseleave(function(){
  $('.blur').css('filter','blur(0px)'); // Removes blur from all when none are hovered
})

// kirim form ke WhatsApp
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah pengiriman default

  const nama = this.nama.value.trim();
  const ucapan = this.ucapan.value.trim();
  const konfirmasi = this.konfirmasi.value;

  const noWa = "6283846027533"; // Ganti dengan nomor WhatsApp kamu
  const pesan = `Halo, saya ${nama}%0A%0A"${ucapan}"%0A%0AKonfirmasi kehadiran: ${konfirmasi}`;

  window.open(`https://wa.me/${noWa}?text=${pesan}`, "_blank");
});
// kirim form ke WhatsApp end

// undngan end

