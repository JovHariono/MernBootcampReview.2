// var dataNilai = [80, 90, 50, 60]

// dataNilai.map((data) => {
//     console.log(data)
// })

var daftarProduk = [
    {
        id: 1,
        namaProduk: "Ice Cream",
        qty: 2,
        harga: 2000,
        subtotal: 0
    },
    {
        id: 2,
        namaProduk: "Mie Goreng",
        qty: 1,
        harga: 2500,
        subtotal: 0,
        diskon: 1000
    },
]

var manipulasiArray = daftarProduk.map((item) => {
    
    if(item.diskon){
        item.subtotal = item.qty * (item.harga - item.diskon)
    }else{
        item.subtotal = item.qty * item.harga
    }
    return item
})

console.log(manipulasiArray)