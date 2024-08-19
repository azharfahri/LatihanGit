document.querySelector('h1').innerText = 'Latihan Javascript Selesai';


let name = "John";
const age = 30;

document.getElementById('output').innerHTML = `Nama: ${name}, Umur: ${age}`;


let fruits = ["Apple", "Banana", "Mango"];
let fruitsList = "Buah: ";
for (let i = 0; i < fruits.length; i++) {
    fruitsList += fruits[i] + " ";
}
document.getElementById('output').innerHTML += `<br>${fruitsList}`;

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
document.getElementById('output').innerHTML += `<br>Nama Lengkap: ${person.firstName} ${person.lastName}`;


function cekNilai() {
    let userInput = document.getElementById('userInput').value;
    let outputDiv = document.getElementById('output');

    if (userInput > 10) {
        outputDiv.innerHTML += `<br>Nilai lebih besar dari 10`;
    } else if (userInput == 10) {
        outputDiv.innerHTML += `<br>Nilai sama dengan 10`;
    } else {
        outputDiv.innerHTML += `<br>Nilai kurang dari 10`;
    }

    
    for (let i = 1; i <= userInput; i++) {
        outputDiv.innerHTML += `<br>${i}`;
    }
}

function greet(name) {
    return `Hello, ${name}`;
}




// Panggil fungsi greet dengan argumen berbeda dan tampilkan hasilnya
document.getElementById('output').innerHTML += `<br>${greet('Alice')}`;
document.getElementById('output').innerHTML += `<br>${greet('Bob')}`;

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Panggil fungsi calculateSquare dengan beberapa angka dan tampilkan hasilnya
document.getElementById('output').innerHTML += `<br>Kuadrat dari 2: ${calculateSquare(2)}`;
document.getElementById('output').innerHTML += `<br>Kuadrat dari 5: ${calculateSquare(5)}`;
document.getElementById('output').innerHTML += `<br>Kuadrat dari 10: ${calculateSquare(10)}`;

// Arrow function untuk menjumlahkan dua angka
const addNumbers = (a, b) => a + b;

// Panggil fungsi arrow dan tampilkan hasilnya
document.getElementById('output').innerHTML += `<br>Penjumlahan 3 + 4: ${addNumbers(3, 4)}`;
document.getElementById('output').innerHTML += `<br>Penjumlahan 7 + 8: ${addNumbers(7, 8)}`;






// Array students
let students = ["Alice", "Bob", "Charlie"];

// Tambahkan satu nama lagi ke array
students.push("David");

// Gunakan forEach untuk menampilkan semua nama siswa
students.forEach(student => {
    document.getElementById('output').innerHTML += `<br>Nama Siswa: ${student}`;
});

// Objek car
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Tampilkan semua properti dari objek car menggunakan for...in loop
for (let property in car) {
    document.getElementById('output').innerHTML += `<br>${property}: ${car[property]}`;
}

// Array objek untuk beberapa mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Focus", year: 2018}
];

// Gunakan forEach untuk menampilkan informasi setiap mobil
cars.forEach(car => {
    document.getElementById('output').innerHTML += `<br>Mobil: ${car.brand} ${car.model}, Tahun: ${car.year}`;
});