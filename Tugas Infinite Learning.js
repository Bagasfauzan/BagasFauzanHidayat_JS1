// Contoh program JavaScript dengan if, else, dan nested if
// Menggunakan if, else untuk mengecek apakah nilai tersebut memenuhi syarat kelulusan atau tidak
const examValue = 80
if (examValue >= 75) {
    console.log("Lulus")
}
else{
    console.log("Tidak Lulus")
}
// Menggunakan nested if untuk memberikan tingkatan pada sebuah nilai
if (examValue >= 95) {
    console.log("Lulus dengan predikat S")
}
else if (examValue >= 85) {
    console.log("Lulus dengan predikat A")
} 
else if (examValue >= 75) {
    console.log("Lulus dengan predikat B")
}
else if (examValue >= 60) {
    console.log("Tidak Lulus dengan predikat C")
}
else {
    console.log("Tidak Lulus dengan predikat D")
}
// Contoh program JavaScript dengan switch case

// Fungsi ini mengambil nilai dari user untuk hari dalam seminggu
const hari = prompt("Hari Ini Adalah Hari:").toLowerCase();

// Pernyataan switch case untuk mengevaluasi nilai 'hari'
switch (hari) {
  case "senin":
    console.log("Hari ini Aku sedang Berpuasa.");
    break;
  case "selasa":
    console.log("Hari ini Aku Kuliah.");
    break;
  case "rabu":
    console.log("Hari ini Aku Kuliah.");
    break;
  case "kamis":
    console.log("Hari ini Aku sedang Berpuasa.");
    break;
  case "jumat":
    console.log("Hari ini Aku shalat Jum'at");
    break;
  case "sabtu":
    console.log("Hari ini Merupakan Hari Libur.");
    break;
  case "minggu":
    console.log("Hari ini Merupakan Hari Libur.");
    break;
  default:
    console.log("Input yang anda masukkan Salah");
    break;
}
// Contoh program JavaScript dengan perulangan for, while, dan do while
// Menggunakan perulangan for untuk mencetak Angkot dengan no 1-5 itu beroperasi dengan baik
for (var nilaiAwal = 1; nilaiAwal <= 5; nilaiAwal++) {
    console.log("Angkot No." + nilaiAwal + "Beroperasi dengan baik");
  }

// Menggunakan perulangan while untuk mencetak Angkot dengan no 6-10 itu tidak beroperasi
var nilaiTengah = 6;
while (nilaiTengah <= 10) {
    console.log("Angkot No." + nilaiTengah + "Tidak Beroperasi");
    nilaiTengah++;
  }

// Menggunakan perulangan do-while untuk mencetak Angkot dengan no 11-15 itu beroperasi dengan tidak baik
var nilaiAkhir = 11;
do {
  console.log("Angkot No." + nilaiAkhir + "Beroperasi dengan kurang baik");
  nilaiAkhir++;
} while (nilaiAkhir <= 15);
// Contoh program JavaScript dengan function
// Mendefinisikan Luas Persegi Panjang
function HitungLuasPersegiPanjang(Panjang, Lebar) {
    var Luas = (Panjang * Lebar);
    return Luas;
  }
// Gunakan fungsi untuk menghitung Luas Persegi Panjang dengan Panjang 10 dan Lebar 8
  var PanjangPersegi = 10;
  var LebarPersegi = 8;
  var HasilLuas = HitungLuasPersegiPanjang(PanjangPersegi, LebarPersegi);
  
  // Tampilkan hasilnya ke konsol
  console.log("Luas Sebuah Persegi dengan Panjang", PanjangPersegi,"Cm", "dan Lebar", LebarPersegi,"Cm", "adalah:", HasilLuas,"Cm");