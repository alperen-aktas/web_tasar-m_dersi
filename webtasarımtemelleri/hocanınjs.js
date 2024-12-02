function bagis_kontrolu() {
    let kullanici_giris_elementi = document.getElementById("bagis_deger");
    let kullanici_bagis_miktarı = parseInt(kullanici_giris_elementi.value);
    if (kullanici_bagis_miktarı <=0 || isNaN(kullanici_bagis_miktarı)){
        alert("Lütfen geçerli bir deper giriniz");
        console.log("Lütfen geçerli bir değer giriniz!")
    }
}