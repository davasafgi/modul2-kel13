import React from 'react';
import './App.css';
import ReactJSX from './components/ReactJSX';
import Button from './elements/Button';
import TextInput from './elements/TextInput';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ReactJSX />

				<div className="Components">
					<form action="">
						<TextInput border="red" placeholder="Nama" />
						<Button background="blue">Submit</Button>
					</form>
				</div>
			</header>
		</div>
	);
}

export default App;
