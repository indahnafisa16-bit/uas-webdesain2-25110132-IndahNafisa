// ===== VALIDASI FORM =====
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

// ===== TOMBOL SCROLL KE ATAS =====
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

// ===== SEMUA FITUR UTAMA =====
window.onload = function () {

  // Carousel
  if (window.$ && $('#heroCarousel').length) {
    $('#heroCarousel').carousel({ interval: 4500, ride: 'carousel' });
  }

  // Modal produk dinamis
  if (window.$ && $('#modalProduk').length) {
    $('#modalProduk').on('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      if (!trigger) return;
      var modal = document.getElementById('modalProduk');
      modal.querySelector('.modal-title').textContent = trigger.getAttribute('data-nama') || '';
      modal.querySelector('.modal-deskripsi').textContent = trigger.getAttribute('data-deskripsi') || '';
      modal.querySelector('.modal-harga').textContent = trigger.getAttribute('data-harga') || '';
      modal.querySelector('.modal-level').textContent = trigger.getAttribute('data-level') || '';
      modal.querySelector('.foto-modal').style.backgroundImage = "url('" + trigger.getAttribute('data-foto') + "')";
    });
  }

  // ===== ANIMASI ANGKA =====
  var elAngka = document.querySelectorAll('.angka');
  if (elAngka.length === 0) return;

  elAngka.forEach(function (el) {
    var target = parseInt(el.getAttribute('data-target'));
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    var current = target > 1000 ? 2000 : 0;
    el.textContent = current + suffix;

    var timer = setInterval(function () {
      current += 1;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current + suffix;
    }, target > 100 ? 15 : 200);
  });
};
        
