// Kullanıcıdan alınan verilere göre emeklilik yaşını hesaplayan fonksiyon
function hesapla() {
    // Kullanıcının doğum yılını ve cinsiyetini alıyoruz
    let dogumYili = document.getElementById("dogumYili").value;
    let cinsiyet = document.getElementById("cinsiyet").value;
    
    // Günümüz yılını otomatik alalım
    let suAnkiYil = new Date().getFullYear();
    
    // Kullanıcının yaşını hesaplıyoruz
    let yas = suAnkiYil - dogumYili;

    // Emeklilik yaşını belirleyelim (erkek için 60, kadın için 58)
    let emeklilikYasi = (cinsiyet === "erkek") ? 60 : 58;

    // Sonucu ekrana yazdıralım
    let sonucMetni = ""; // Boş bir değişken oluşturduk, içine sonucu yazacağız

    if (yas >= emeklilikYasi) {
        // Kullanıcı zaten emekli olacak yaşta mı?
        sonucMetni = "Tebrikler! Zaten emekli olabilirsiniz. 🎉";
    } else {
        // Emekliliğe kaç yıl kaldığını hesaplıyoruz
        let kalanYil = emeklilikYasi - yas;
        sonucMetni = `Emekli olmanıza ${kalanYil} yıl kaldı. Sabırla bekleyin. 😊`;
    }

    // Hesaplanan sonucu HTML içinde gösterelim
    document.getElementById("sonuc").innerText = sonucMetni;
}
