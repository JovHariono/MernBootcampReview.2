const txtArea = document.querySelector("#txtArea")
const txtSearch = document.querySelector("#txtSearch")

let products = [
    {
        id: 1,
        name: "Produk 1",
        price: 34000,
        stok: 12,
        limitStock: 2,
        inStock: true
    },
    {
        id: 2,
        name: "Produk 2",
        price: 500000,
        stok: 1,
        limitStock: 2,
        inStock: false
    },
    {
        id: 3,
        name: "Produk 3",
        price: 80000,
        stok: 15,
        limitStock: 2,
        inStock: true
    },
]

let transaksiPenjualan = {
    tanggal: "2023-01-01",
    noFaktur: "FKT-001",
    total: 64000,
    customer: {
        id: "CST-003",
        nama: "Budi",
        umur: 23,
    },
    daftarBarang: [
        {
            id: 1,
            name: "Produk 1",
            quantity: 2,
            subTotal: 2 * 34000,
        }
    ],
}

txtArea.value = JSON.stringify(products)

txtSearch.addEventListener("change", (e) => {
    var search = e.target.value

    var hasil = products.filter((obj) => obj.name == search)
    txtArea.value = JSON.stringify(hasil)
})

// let hasil = []

// for(let obj of products) {
//     if(obj.inStock) {
//         hasil.push(obj)
//     }
// }

// let hasilFilter = products.filter((product) => product.stok > 12)