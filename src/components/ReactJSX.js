import React from 'react';

const asisten = {
    name : 'Muhammad Yafi',
    jurusan : 'Teknik Komputer 2019'
};

function greetings(asisten){
    return asisten.name + ' dari ' + asisten.jurusan;
}


//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Belajar JSX</h1>
            <h2>Belajar JSX hehe {greetings(asisten)}</h2>
            <p style={{color:'#00ff00'}}>ini adalah contoh menggunakan JSX</p>
        </div>
    );
}

//tidak menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null, 
    React.createElement('h1', null, 'Halo Praktikan hehe'),
    React.createElement('h2', null, 'Nama gue ', greetings(asisten)),    
    React.createElement('p', {style:{color:'#ff0000'}}, 'ini adalah contoh tanpa JSX')
    )
}   
export default ReactJSX;
export {ReactNoJSX};
