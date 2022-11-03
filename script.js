const tombol = document.getElementById('submit')
const tombol1 = document.getElementById('checkout1')
function checkout (nama, jumlah=0, mode=0){
    const tempat = document.getElementById('informasi')
    if(mode==1){
        tempat.innerHTML = '<center><h3>Anda Berhasil Melakukan Pre-Order</h3></center><br>'+'Nama Produk : '+nama+'<br>Jumlah Produk : '+jumlah
    }else{
        tempat.innerHTML = ''
        nama.style = 'margin: 0 auto;'
        tempat.append(nama)
    }
}
tombol.onclick = function(){
    const nama = document.getElementById('nama').value
    const jumlah = document.getElementById('jumlah').value
     
    checkout(nama, jumlah, 1)
}

tombol1.onclick = function(){
    const isi = document.getElementById('produk_1')

    checkout(isi)
}

const tombol2 = document.getElementById('checkout2')
tombol2.onclick = function(){
    const isi = document.getElementById('produk_2')

    checkout(isi)
}

const tombol3 = document.getElementById('checkout3')
tombol3.onclick = function(){
    const isi = document.getElementById('produk_3')

    checkout(isi)
}