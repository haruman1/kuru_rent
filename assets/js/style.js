function handleCopyClick(evt) {
  // get the children of the parent element
  const { children } = evt.target.parentElement;
  // grab the first element (we append the copy button on afterwards, so the first will be the code element)
  // destructure the innerText from the code block
  const { innerText } = Array.from(children)[0];
  // copy all of the code to the clipboard
  copyToClipboard(innerText);
  // alert to show it worked, but you can put any kind of tooltip/popup to notify it worked
  alert(innerText);
}
const copyToClipboard = (str) => {
  const el = document.createElement('textarea'); // Create a <textarea> element
  el.value = str; // Set its value to the string that you want copied
  el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px'; // Move outside the screen to make it invisible
  document.body.appendChild(el); // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false; // Mark as false to know no selection existed before
  el.select(); // Select the <textarea> content
  document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el); // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
    document.getSelection().addRange(selected); // Restore the original selection
  }
};
function hitungSelisihTanggal(tahunAwalan, bulanAwalan, tanggalAwalan) {
  // Tanggal awalan
  var tanggalAwalan = new Date(tahunAwalan, bulanAwalan - 1, tanggalAwalan); // Bulan dimulai dari 0, sehingga kurangkan 1

  // Tanggal saat ini
  var tanggalSaatIni = new Date();

  // Menghitung selisih tahun
  var selisihTahun = tanggalSaatIni.getFullYear() - tanggalAwalan.getFullYear();

  // Jika bulan saat ini lebih kecil dari bulan awalan atau bulan sama tapi tanggal saat ini kurang dari tanggal awalan
  if (
    tanggalSaatIni.getMonth() < tanggalAwalan.getMonth() ||
    (tanggalSaatIni.getMonth() === tanggalAwalan.getMonth() &&
      tanggalSaatIni.getDate() < tanggalAwalan.getDate())
  ) {
    selisihTahun -= 1;
  }

  // Menghitung selisih bulan
  var selisihBulan =
    tanggalSaatIni.getMonth() +
    12 * tanggalSaatIni.getFullYear() -
    (tanggalAwalan.getMonth() + 12 * tanggalAwalan.getFullYear());

  // Menghitung selisih hari
  var selisihHari = tanggalSaatIni.getDate() - tanggalAwalan.getDate();

  // Mengembalikan hasil sebagai objek
  return {
    tahun: selisihTahun,
    bulan: selisihBulan,
    hari: selisihHari,
  };
}
function panggil_hasil(tahun, bulan, tanggal) {
  var hasil = hitungSelisihTanggal(tahun, bulan, tanggal);
  document.write(
    '<strong>Bergabung selama: ' +
      hasil.tahun +
      ' tahun, ' +
      hasil.bulan +
      ' bulan, dan ' +
      hasil.hari +
      ' hari. </strong>'
  );
  var ScriptPanggilHasil = document.createElement('script');
  ScriptPanggilHasil.type = 'text/javascript';
  ScriptPanggilHasil.defer = true;
  ScriptPanggilHasil.innerHTML = panggil_hasil(
    ' + tahun + ',
    ' + bulan + ',
    ' + tanggal + '
  );
  document.body.appendChild(ScriptPanggilHasil);
}
