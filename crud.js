let data = [];

function tambahData() {
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const alamat = document.getElementById('alamat').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;

    if (nama && umur && alamat && email && telepon) {
        const newData = { nama, umur, alamat, email, telepon };
        data.push(newData);
        updateTabel();
        resetForm();
    } else {
        alert('Semua kolom harus diisi');
    }
}

function updateTabel() {
    const tabelData = document.getElementById('tabelData');
    const tbody = tabelData.querySelector('tbody');

    // Clear existing rows
    tbody.innerHTML = '';

    data.forEach((item, index) => {
        const row = tbody.insertRow();
        const cellNama = row.insertCell(0);
        const cellUmur = row.insertCell(1);
        const cellAlamat = row.insertCell(2);
        const cellEmail = row.insertCell(3);
        const cellTelepon = row.insertCell(4);
        const cellAction = row.insertCell(5);

        cellNama.textContent = item.nama;
        cellUmur.textContent = item.umur;
        cellAlamat.textContent = item.alamat;
        cellEmail.textContent = item.email;
        cellTelepon.textContent = item.telepon;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editData(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', () => hapusData(index));

        cellAction.appendChild(editButton);
        cellAction.appendChild(deleteButton);
    });

    // Show the table
    tabelData.classList.remove('hidden');
}

function editData(index) {
    const newData = prompt('Masukkan data baru', `${data[index].nama}-${data[index].umur}-${data[index].alamat}-${data[index].email}-${data[index].telepon}`);
    
    if (newData) {
        const [nama, umur, alamat, email, telepon] = newData.split('-');
        data[index] = { nama, umur, alamat, email, telepon };
        updateTabel();
    }
}

function hapusData(index) {
    const konfirmasi = confirm('Apakah Anda yakin ingin menghapus data ini?');

    if (konfirmasi) {
        data.splice(index, 1);
        updateTabel();
    }
}

function resetForm() {
    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('alamat').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telepon').value = '';
}
