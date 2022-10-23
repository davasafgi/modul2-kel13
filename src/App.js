import React from 'react';
import './App.css';
import ReactJSX, { ReactNoJSX } from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ReactJSX />
				<ReactNoJSX />

				<div className="Components">
					<CompAndProps bgColor="#66ccff" />
					<form action="">
						<TextInput border="red" placeholder="Nama" />
						<Button background="blue">Kirim</Button>
					</form>
				</div>
			</header>
		</div>
	);
}

export default App;

