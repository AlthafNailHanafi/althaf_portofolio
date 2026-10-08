/**
 * PORTOFOLIO JAVASCRIPT - Althaf Nail Hanafi (SMK Krian 1)
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. FITUR MENU HAMBURGER (RESPONSIF MOBILE)
    const tombolHamburger = document.getElementById('tombol-hamburger');
    const menuNavigasi = document.getElementById('menu-navigasi');
    const tautanNavigasi = document.querySelectorAll('.tautan-navigasi');

    if (tombolHamburger && menuNavigasi) {
        tombolHamburger.addEventListener('click', () => {
            tombolHamburger.classList.toggle('aktif');
            menuNavigasi.classList.toggle('aktif');
        });

        tautanNavigasi.forEach(tautan => {
            tautan.addEventListener('click', () => {
                tombolHamburger.classList.remove('aktif');
                menuNavigasi.classList.remove('aktif');
            });
        });
    }

    // 2. FITUR TEMA GELAP / TERANG (LIGHT / DARK MODE)
    const tombolTema = document.getElementById('tombol-tema');
    const ikonTema = document.getElementById('ikon-tema');
    const elemenRoot = document.documentElement;

    function perbaruiIkonTema(temaSaatIni) {
        if (ikonTema) {
            ikonTema.textContent = temaSaatIni === 'dark' ? '🌙' : '☀️';
        }
    }

    const temaTersimpan = localStorage.getItem('tema-pilihan') || 'dark';
    elemenRoot.setAttribute('data-tema', temaTersimpan);
    perbaruiIkonTema(temaTersimpan);

    if (tombolTema) {
        tombolTema.addEventListener('click', () => {
            const temaSekarang = elemenRoot.getAttribute('data-tema');
            const temaBaru = temaSekarang === 'dark' ? 'light' : 'dark';

            elemenRoot.setAttribute('data-tema', temaBaru);
            localStorage.setItem('tema-pilihan', temaBaru);
            perbaruiIkonTema(temaBaru);
        });
    }

    // 3. FITUR TRANSLATE (BAHASA INDONESIA <-> ENGLISH)
    const tombolBahasa = document.getElementById('tombol-bahasa');
    const teksBahasa = document.getElementById('teks-bahasa');
    const elemenPenerjemah = document.querySelectorAll('[data-id][data-en]');

    let bahasaSaatIni = localStorage.getItem('bahasa-pilihan') || 'id';

    function terjemahkanHalaman(bahasa) {
        elemenPenerjemah.forEach(elemen => {
            if (bahasa === 'en') {
                elemen.textContent = elemen.getAttribute('data-en');
            } else {
                elemen.textContent = elemen.getAttribute('data-id');
            }
        });

        const inputNama = document.getElementById('input-nama');
        const inputEmail = document.getElementById('input-email');
        const inputPesan = document.getElementById('input-pesan');

        if (inputNama && inputEmail && inputPesan) {
            if (bahasa === 'en') {
                inputNama.placeholder = "Enter your full name...";
                inputEmail.placeholder = "name@email.com";
                inputPesan.placeholder = "Write your message here...";
            } else {
                inputNama.placeholder = "Masukkan nama Anda...";
                inputEmail.placeholder = "nama@email.com";
                inputPesan.placeholder = "Tuliskan pesan Anda di sini...";
            }
        }

        if (teksBahasa) {
            teksBahasa.textContent = bahasa === 'id' ? 'EN' : 'ID';
        }
    }

    terjemahkanHalaman(bahasaSaatIni);

    if (tombolBahasa) {
        tombolBahasa.addEventListener('click', () => {
            bahasaSaatIni = bahasaSaatIni === 'id' ? 'en' : 'id';
            localStorage.setItem('bahasa-pilihan', bahasaSaatIni);
            terjemahkanHalaman(bahasaSaatIni);
        });
    }

    // 4. INTERAKSI FORMULIR KONTAK
    const formulirKontak = document.getElementById('formulir-kontak');

    if (formulirKontak) {
        formulirKontak.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nama = document.getElementById('input-nama').value;

            if (bahasaSaatIni === 'en') {
                alert(`Thank you, ${nama}! Your message has been sent successfully.`);
            } else {
                alert(`Terima kasih, ${nama}! Pesan Anda telah berhasil terkirim.`);
            }

            formulirKontak.reset();
        });
    }

    // 5. FITUR MODAL PREVIEW GAMBAR FULLSCREEN SAAT DIKLIK
    const modalGambar = document.getElementById('modal-gambar');
    const gambarPreviewFokus = document.getElementById('gambar-preview-fokus');
    const teksKeteranganGambar = document.getElementById('teks-keterangan-gambar');
    const tombolTutupGambar = document.getElementById('tutup-gambar');

    document.querySelectorAll('.gambar-proyek').forEach(gambar => {
        gambar.addEventListener('click', () => {
            if (modalGambar && gambarPreviewFokus) {
                modalGambar.style.display = 'flex';
                gambarPreviewFokus.src = gambar.src;
                if (teksKeteranganGambar) {
                    teksKeteranganGambar.textContent = gambar.alt || 'Preview Proyek';
                }
            }
        });
    });

    if (tombolTutupGambar) {
        tombolTutupGambar.addEventListener('click', () => {
            modalGambar.style.display = 'none';
        });
    }

    if (modalGambar) {
        modalGambar.addEventListener('click', (e) => {
            if (e.target === modalGambar) {
                modalGambar.style.display = 'none';
            }
        });
    }

});
