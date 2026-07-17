// Validasi form
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        var alertBox = document.getElementById('formAlert');
        if (alertBox) {
          alertBox.classList.remove('d-none');
          alertBox.innerHTML = '<i class="fas fa-circle-check mr-2"></i>Pesan terkirim!';
          form.reset();
          form.classList.remove('was-validated');
        }
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Tombol kembali ke atas
window.addEventListener('scroll', function () {
  var btn = document.getElementById('btnTop');
  if (!btn) return;
  btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
document.addEventListener('click', function (e) {
  if (e.target.closest && e.target.closest('#btnTop')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.addEventListener('DOMContentLoaded', function () {

  // Carousel
  if (window.$) {
    $('#heroCarousel').carousel({ interval: 4500, ride: 'carousel' });
  }

  // Modal produk dinamis
  var modal = document.getElementById('modalProduk');
  if (modal && window.$) {
    $('#modalProduk').on('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      if (!trigger) return;
      modal.querySelector('.modal-title').textContent = trigger.getAttribute('data-nama');
      modal.querySelector('.modal-deskripsi').textContent = trigger.getAttribute('data-deskripsi');
      modal.querySelector('.modal-harga').textContent = trigger.getAttribute('data-harga');
      modal.querySelector('.modal-level').textContent = trigger.getAttribute('data-level');
      modal.querySelector('.foto-modal').style.backgroundImage = "url('" + trigger.getAttribute('data-foto') + "')";
    });
  }

  // Animasi angka — langsung jalan saat halaman load
  function animasiAngka(el, target, durasi) {
    var start = 0;
    var increment = target / (durasi / 16);
    var timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      }
    }, 16);
  }

  // Langsung jalankan semua tanpa perlu scroll
  document.querySelectorAll('.angka').forEach(function (el) {
    var target = parseInt(el.dataset.target);
    if (!isNaN(target)) {
      animasiAngka(el, target, 2000);
    }
  });

});document.addEventListener('DOMContentLoaded', function () {

  // Carousel
  $('#heroCarousel').carousel({ interval: 4500, ride: 'carousel' });

  // Modal produk dinamis
  var modal = document.getElementById('modalProduk');
  if (modal && window.$) {
    $('#modalProduk').on('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      if (!trigger) return;
      modal.querySelector('.modal-title').textContent = trigger.getAttribute('data-nama');
      modal.querySelector('.modal-deskripsi').textContent = trigger.getAttribute('data-deskripsi');
      modal.querySelector('.modal-harga').textContent = trigger.getAttribute('data-harga');
      modal.querySelector('.modal-level').textContent = trigger.getAttribute('data-level');
      modal.querySelector('.foto-modal').style.backgroundImage = "url('" + trigger.getAttribute('data-foto') + "')";
    });
  }

  // Animasi angka
  function animasiAngka(el, target, durasi) {
    if (el.dataset.animated) return; // jangan animasi dua kali
    el.dataset.animated = "true";
    var start = 0;
    var increment = target / (durasi / 16);
    var timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      }
    }, 16);
  }

  var elAngka = document.querySelectorAll('.angka');

  // Pakai IntersectionObserver kalau didukung browser
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          animasiAngka(el, parseInt(el.dataset.target), 1500);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 }); // turun dari 0.5 ke 0.1

    elAngka.forEach(function (el) { observer.observe(el); });

  } else {
    // Fallback: langsung jalankan tanpa observer
    elAngka.forEach(function (el) {
      animasiAngka(el, parseInt(el.dataset.target), 1500);
    });
  }

});document.addEventListener('click', function (e) {
  if (e.target.closest && e.target.closest('#btnTop')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Modal produk dinamis
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('modalProduk');
  if (modal && window.$) {
    $('#modalProduk').on('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      if (!trigger) return;
      modal.querySelector('.modal-title').textContent = trigger.getAttribute('data-nama');
      modal.querySelector('.modal-deskripsi').textContent = trigger.getAttribute('data-deskripsi');
      modal.querySelector('.modal-harga').textContent = trigger.getAttribute('data-harga');
      modal.querySelector('.modal-level').textContent = trigger.getAttribute('data-level');
      modal.querySelector('.foto-modal').style.backgroundImage = "url('" + trigger.getAttribute('data-foto') + "')";
    });
  }

  // Animasi angka statistik
  function animasiAngka(el, target, durasi) {
    var start = 0;
    var increment = target / (durasi / 16);
    var timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      }
    }, 16);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var angka = entry.target;
        var target = parseInt(angka.dataset.target);
        animasiAngka(angka, target, 1500);
        observer.unobserve(angka);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.angka').forEach(function (el) {
    observer.observe(el);
  });

});  if (e.target.closest && e.target.closest('#btnTop')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Modal produk dinamis
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('modalProduk');
  if (modal && window.$) {
    $('#modalProduk').on('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      if (!trigger) return;
      modal.querySelector('.modal-title').textContent = trigger.getAttribute('data-nama');
      modal.querySelector('.modal-deskripsi').textContent = trigger.getAttribute('data-deskripsi');
      modal.querySelector('.modal-harga').textContent = trigger.getAttribute('data-harga');
      modal.querySelector('.modal-level').textContent = trigger.getAttribute('data-level');
      modal.querySelector('.foto-modal').style.backgroundImage = "url('" + trigger.getAttribute('data-foto') + "')";
    });
  }

  // Animasi angka statistik
  function animasiAngka(el, target, durasi) {
    var start = 0;
    var increment = target / (durasi / 16);
    var timer = setInterval(function () {
      start += increment;
      if (start >= target) {
        el.textContent = target + (el.dataset.suffix || '');
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      }
    }, 16);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var angka = entry.target;
        var target = parseInt(angka.dataset.target);
        animasiAngka(angka, target, 1500);
        observer.unobserve(angka);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.angka').forEach(function (el) {
    observer.observe(el);
  });

});
