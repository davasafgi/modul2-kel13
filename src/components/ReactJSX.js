import React from 'react';

const praktikan = {
	name: 'Praktikan Kelompok 13',
	jurusan: 'Teknik Komputer 2019',
};

function greetings(praktikan) {
	return praktikan.name + ' dari ' + praktikan.jurusan;
}

//menggunakan JSX
const ReactJSX = () => {
	return (
		<div>
			<h1>Belajar JSX</h1>
			<h2>Belajar JSX {greetings(praktikan)}</h2>
			<p style={{ color: '#00ff00' }}>ini adalah contoh menggunakan JSX</p>
		</div>
	);
};

//tidak menggunakan JSX
const ReactNoJSX = () => {
	return React.createElement(
		'div',
		null,
		React.createElement('h1', null, 'Halo Praktikan hehe'),
		React.createElement('h2', null, 'Nama gue ', greetings(praktikan)),
		React.createElement('p', { style: { color: '#ff0000' } }, 'ini adalah contoh tanpa JSX')
	);
};
export default ReactJSX;
export { ReactNoJSX };
