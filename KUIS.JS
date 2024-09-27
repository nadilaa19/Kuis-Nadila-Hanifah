function createTable() { 
    const tableContainer = document.getElementById("tableContainer");

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["No", "NIM", "Nama", "Prodi", "Kelas", "Aksi"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    const students = [
        { no: 1, nim: '2306301', nama: 'Nadila Hanifah', prodi: 'SIK', kelas: 'A' },
        { no: 2, nim: '2306882', nama: 'Linda Apriyani', prodi: 'SIK', kelas: 'A' },
        { no: 3, nim: '2301011', nama: 'Khansa Farah', prodi: 'PKP', kelas: 'B' },
        { no: 4, nim: '2390848', nama: 'Gizza Pradnya', prodi: 'PGSD', kelas: 'B' },
        { no: 5, nim: '2387589', nama: 'Bonita Fransisca', prodi: 'PKP', kelas: 'B' }
    ];

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        Object.values(student).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        const actionCell = document.createElement("td");
        const link = document.createElement("a");
        link.textContent = "Klik";
        link.href = "#"; // Prevent default link behavior
        
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link action
            
            // Event untuk baris pertama: Menampilkan simbol
            if (index === 0) {
                const symbol = document.createElement("span");
                symbol.textContent = "★"; // Simbol yang ingin ditampilkan
                symbol.style.color = "gold"; // Warna simbol
                symbol.style.fontSize = "20px"; // Ukuran simbol
                row.appendChild(symbol);
            }

            // Event untuk baris ketiga: Teks jatuh
            if (index === 2) {
                const tdElements = row.querySelectorAll("td");
                tdElements.forEach(td => {
                    td.classList.add("fall"); // Menambahkan kelas jatuh
                });
            }

            // Event untuk baris keempat: Mengubah warna teks
            if (index === 3) {
                const tdElements = row.querySelectorAll("td");
                tdElements.forEach(td => {
                    td.style.color = getRandomColor(); // Mengubah warna teks menjadi warna acak
                });
            }

            // Event untuk baris kelima: Mengubah teks menjadi tebal
            if (index === 4) {
                const tdElements = row.querySelectorAll("td");
                tdElements.forEach(td => {
                    td.style.fontWeight = "bold"; // Mengubah teks menjadi tebal
                });
            }

            // Event lainnya
            row.style.backgroundColor = getRandomColor();
            alert(`Details for ${student.nama}: NIM ${student.nim}, Prodi ${student.prodi}, Kelas ${student.kelas}`);
            link.textContent = "Disini!";
            row.classList.toggle("highlight");

            const noteCell = document.createElement("td");
            noteCell.textContent = "Hii saya " + student.nama;
            row.appendChild(noteCell);
            
            row.style.transition = "transform 0.3s";
            row.style.transform = "scale(1.05)";
            setTimeout(() => {
                row.style.transform = "scale(1)";
            }, 300);
        });

        actionCell.appendChild(link);
        row.appendChild(actionCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Call the createTable function when the script loads
createTable();
