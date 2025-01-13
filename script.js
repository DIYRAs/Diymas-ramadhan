document.addEventListener("DOMContentLoaded", function () {
    // COVER
    let bunga_cover = document.querySelector(".bunga-cover");
    let bunga_cover2 = document.querySelector(".bunga-cover2");
    let bunga_cover3 = document.querySelector(".bunga-cover3");

    // INTRO
    let img_intro = document.querySelectorAll('.marquees img');

    // MEMPELAI
    let thumbnail_mempelai = document.querySelector('.mempelai')
    let thumbnail = document.querySelector('.thumbnail')
    let bride = document.querySelector('.bride')
    let groom = document.querySelector('.groom')

    // EVENT
    let countdown = document.querySelector('.countdown')
    let countdown_teks = document.querySelectorAll('.countdown p')
    let akad = document.querySelector('.event-middle')
    let resep = document.querySelector('.event-lower')

    // GALERI
    let video = document.querySelector('.video')
    let foto = document.querySelector('.galeri-lower')
    let fotos = document.querySelectorAll('.duar')

    // RSVP
    let rsvp = document.querySelector('.rsvp-penutup')
    let bunga2_rsvp = document.querySelector('.rsvp .bunga2')
    let bunga1_rsvp = document.querySelector('.rsvp .bunga1')
    let rsvp_form = document.getElementById('here')
    let inputs = document.querySelectorAll('.inputs')
    let input2 = document.getElementById('noHp')
    let rsvp_btn = document.querySelector('#here button')
    let nama2 = document.getElementById('nama2')
    let pesan = document.getElementById('pesan')

    function checking() {
        // COVER
        const bungaCoverRect = bunga_cover.getBoundingClientRect();
        const isvis_bungaCover = bungaCoverRect.top < window.innerHeight && bungaCoverRect.bottom > 0;

        // INTRO
        img_intro.forEach(imgIntro => {
            const imgIntroRect = imgIntro.getBoundingClientRect();
            const isvis_imgIntro = imgIntroRect.top < window.innerHeight && imgIntroRect.bottom > 0;

            if (isvis_imgIntro) {
                imgIntro.classList.add('intro-img-muncul')
            }
            else {
                imgIntro.classList.remove('intro-img-muncul')
            }
        });

        // MEMPELAI
        const thumbRect = thumbnail_mempelai.getBoundingClientRect();
        const isvis_thumb = thumbRect.top <= window.innerHeight && thumbRect.bottom >= 0;

        const brideRect = bride.getBoundingClientRect();
        const isvis_bride = brideRect.top < window.innerHeight && brideRect.bottom > 0;

        const groomRect = groom.getBoundingClientRect();
        const isvis_groom = groomRect.top < window.innerHeight && groomRect.bottom > 0;

        //EVENT
        const cdRect = countdown.getBoundingClientRect();
        const isvis_cd = cdRect.top < window.innerHeight && cdRect.bottom > 0;

        const akadRect = akad.getBoundingClientRect();
        const isvis_akad = akadRect.top < window.innerHeight && akadRect.bottom > 0;

        const resepRect = resep.getBoundingClientRect();
        const isvis_resep = resepRect.top < window.innerHeight && resepRect.bottom > 0;

        // GALERI 
        const videoRect = video.getBoundingClientRect();
        const isvis_video = videoRect.top < window.innerHeight && videoRect.bottom > 0;

        const fotoRect = foto.getBoundingClientRect();
        const isvis_foto = fotoRect.top < window.innerHeight && fotoRect.bottom > 0;

        // RSVP
        const rsvpRect = rsvp.getBoundingClientRect();
        const isvis_rsvp = rsvpRect.top < window.innerHeight && rsvpRect.bottom > 0;

        const rsvpFormRect = rsvp_form.getBoundingClientRect();
        const isvis_rsvp_form = rsvpFormRect.top < window.innerHeight && rsvpFormRect.bottom > 0;

        // BREAK

        // COVER
        if (isvis_bungaCover) {
            bunga_cover.classList.add("cover-muncul");
            bunga_cover2.classList.add("cover-muncul2");
            bunga_cover3.classList.add("cover-muncul3");
        } else {
            bunga_cover.classList.remove("cover-muncul");
            bunga_cover2.classList.remove("cover-muncul2");
            bunga_cover3.classList.remove("cover-muncul3");
        }

        // INTRO

        // MEMPELAI
        if (isvis_thumb) {
            thumbnail.classList.add('mempelai-thumbnail')
        } else {
            thumbnail.classList.remove('mempelai-thumbnail')
        }

        if (isvis_bride) {
            bride.classList.add('mempelai-bride')
        } else {
            bride.classList.remove('mempelai-bride')
        }

        if (isvis_groom) {
            groom.classList.add('mempelai-groom')
        } else {
            groom.classList.remove('mempelai-groom')
        }

        // EVENT 
        if (isvis_cd) {
            countdown_teks.forEach((p, index) => {
                let delay = index * .2
                p.classList.add('event-countdown')
                p.style.animationDelay = delay + 's'
            });
        } else {
            countdown_teks.forEach((p, index) => {
                p.classList.remove('event-countdown')
            });
        }

        if (isvis_akad) {
            akad.classList.add('mempelai-groom')
        } else {
            akad.classList.remove('mempelai-groom')
        }

        if (isvis_resep) {
            resep.classList.add('mempelai-bride')
        } else {
            resep.classList.remove('mempelai-bride')
        }

        // GALERI
        if (isvis_video) {
            video.classList.add('galeri-video')
        } else {
            video.classList.remove('galeri-video')
        }

        if (isvis_foto) {
            fotos.forEach((f, index) => {
                let delay = index * .3
                f.classList.add('event-countdown')
                f.style.animationDelay = delay + 's'
            })
        } else {
            fotos.forEach(f => {
                f.classList.remove('event-countdown')
            });
        }

        // RSVP
        if (isvis_rsvp) {
            bunga1_rsvp.classList.add('rsvp-bunga1')
            bunga2_rsvp.classList.add('rsvp-bunga2')
        } else {
            bunga1_rsvp.classList.remove('rsvp-bunga1')
            bunga2_rsvp.classList.remove('rsvp-bunga2')
        }

        if (isvis_rsvp) {
            inputs.forEach(inputt => {
                inputt.classList.add('rsvp-input')
            });

            input2.classList.add('rsvp-input2')
            rsvp_btn.classList.add('galeri-video')
            nama2.classList.add('rsvp-input2')
            pesan.classList.add('rsvp-input')
        } else {
            inputs.forEach(inputt => {
                inputt.classList.remove('rsvp-input')
            });

            input2.classList.remove('rsvp-input2')
            rsvp_btn.classList.remove('galeri-video')
            nama2.classList.remove('rsvp-input2')
            pesan.classList.remove('rsvp-input')
        }

    }
    window.addEventListener("scroll", checking);
    checking();
});

// document.body.style.overflow = 'hidden'
let btn_cover = document.querySelector('.cover-lower button')
btn_cover.addEventListener('click', () => {
    document.body.style.overflow = 'visible'
    window.location.href = '#intro'
})

let conter = 0
window.onload = function () {
    if (conter == 1) {
        document.body.style.overflow = 'hidden'
    } else {
        window.location.href = '#cover'
        conter = 1
    }
}

// COUNT DOWN FUNCTION

let hari = document.getElementById("hari");
let jam = document.getElementById("jam");
let menit = document.getElementById("menit");
let detik = document.getElementById("detik");

// Hitung batas akhir countdown
const countdownEnd = localStorage.getItem("countdownEnd")
    ? new Date(localStorage.getItem("countdownEnd"))
    : new Date(Date.now() + 10 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 34 * 60 * 1000 + 45 * 1000);

// Simpan batas akhir countdown di localStorage
localStorage.setItem("countdownEnd", countdownEnd);

function updateCountdown() {
    let now = new Date();
    let timeRemaining = countdownEnd - now;

    if (timeRemaining <= 0) {
        hari.textContent = "0";
        jam.textContent = "0";
        menit.textContent = "0";
        detik.textContent = "0";
        console.log("Countdown selesai!");
        clearInterval(interval);
        return;
    }

    let hari_count = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    let jam_count = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit_count = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let detik_count = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    hari.textContent = hari_count;
    jam.textContent = jam_count;
    menit.textContent = menit_count;
    detik.textContent = detik_count;
}

// Update countdown setiap detik
let interval = setInterval(updateCountdown, 1000);
// localStorage.clear()


function map_akad() {
    window.location.href = "https://maps.app.goo.gl/TtkZZPRDwXnmGXRD7"
}

function map_resepsi() {
    window.location.href = "https://maps.app.goo.gl/atMFmp8hq4trgfrn6"
}


let immg = document.querySelector(".foto10 img");
let img_src = ["mempelai.jpg", "mempelaisdd.jpg", "bazmineh_com.jpg", "foto mempelai.jpg"];
let index = 0;

setInterval(() => {
    // Tambahkan class "fade" untuk mulai animasi fade out
    immg.classList.add("fade");

    // Tunggu sampai animasi fade out selesai (0.5s), lalu ganti gambar dan hilangkan class fade
    setTimeout(() => {
        immg.src = img_src[index];
        immg.classList.remove("fade");
        index = (index + 1) % img_src.length;
    }, 500); // 500ms sama dengan durasi transisi pada CSS
}, 3000); // 3 detik interval untuk memberi jeda antar transisi