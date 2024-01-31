// Dapatkan status persetujuan dari cookie kustom
var consent = __md_get('__consent');

// Periksa apakah pengguna menerima cookie kustom
if (consent && consent.custom) {
  // Panggil fungsi untuk menginisialisasi Google Analytics
  initializeGoogleAnalytics();
} else {
  // Panggil fungsi atau kode lain yang sesuai ketika pengguna menolak cookie
  handleRejectedConsent();
}

function initializeGoogleAnalytics() {
  var propertyId = 'G-5JY8RCY919';

  if (typeof ga === 'undefined') {
    var gaScript = document.createElement('script');
    gaScript.type = 'text/javascript';
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + propertyId;
    document.head.appendChild(gaScript);

    gaScript.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', propertyId);
    };
  } else {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', propertyId);
  }
}

// Fungsi untuk menangani aksi ketika pengguna menolak persetujuan cookie
function handleRejectedConsent() {
  // Gantilah dengan tindakan yang sesuai ketika pengguna menolak persetujuan cookie
  console.log('Pengguna menolak persetujuan cookie');
  var propertyId = 'G-5JY8RCY919';

  if (typeof ga === 'undefined') {
    var gaScript = document.createElement('script');
    gaScript.type = 'text/javascript';
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + propertyId;
    document.head.appendChild(gaScript);

    gaScript.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', propertyId);
    };
  } else {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', propertyId);
  }
}
