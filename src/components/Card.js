import React from 'react';

const Card = ({ mahasiswa }) => {
	return (
		<div key={mahasiswa.nim} className="card-container">
			<h1>{mahasiswa.nama_lengkap}</h1>
			<p>Nama panggilan : {mahasiswa.nama_panggilan}</p>
			<p>NIM : {mahasiswa.nim}</p>
			<p>No. Telepon : {mahasiswa.nomor_telepon}</p>
			<p>ID Line : {mahasiswa.id_line}</p>
			<p>Email : {mahasiswa.email}</p>
			<p>Hobi : {mahasiswa.hobi}</p>
			<p>Tanggal Lahir : {mahasiswa.tanggal_lahir}</p>
		</div>
	);
};

export default Card;
