import React, { useState, useEffect, useId } from 'react';
import './App.css';
import ReactJSX from './components/ReactJSX';
import Card from './components/Card';
import Button from './elements/Button';
import TextInput from './elements/TextInput';

function App() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [query, setQuery] = useState('');

	const id = useId();

	useEffect(() => {
		async function fetchData() {
			await fetch('/data.json')
				.then((res) => res.json())
				.then((res) => setData(res))
				.catch((err) => console.log(err));
		}
		fetchData();
	}, []);

	useEffect(() => {
		const timeOutId = setTimeout(() => setQuery(query), 500);
		return () => clearTimeout(timeOutId);
	}, [query]);

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(e.target.value.toLowerCase());

		const filteredData = data.filter(
			(item) =>
				item.nama_lengkap.toLowerCase().includes(query) ||
				item.nama_panggilan.toLowerCase().includes(query) ||
				item.nim.toString().toLowerCase().includes(query)
		);

		setFilteredData(filteredData);
	};

	return (
		<div className="App">
			<header className="App-header">
				<ReactJSX />
				<div className="Components">
					<form action="">
						<TextInput border="red" placeholder="Nama" onChange={handleSearch} />
						<Button background="blue">Submit</Button>
					</form>
				</div>
				{filteredData.map((item) => (
					<Card key={id} mahasiswa={item} />
				))}
			</header>
		</div>
	);
}

export default App;
