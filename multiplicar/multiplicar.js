const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un numero`)
            return
        }
        let data = ''
        for (let i = 0; i <= 10; i++) {
            data += `${base} * ${i}  =  ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve (`tabla-${base}.txt`)
        })
    })
}

//ahora debo exportrlo   ejemplo en app.js   clg(module);  
        //objeto global disponible a lo largo de toda la app

let crearArchivoAsyn = async (base) =>{
    if(!Number(base)){
        throw new Error (`El valor introducido ${base} no es un numero`);        
    }
    let data = ''
    for (let i = 0; i <= 10; i++) {
        data += `${base} * ${i}  =  ${base * i}\n`
    }

    fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
        if (err) throw new Error (err);              
    })
    return `tabla-${base}.txt`;
}

module.exports={crearArchivo,crearArchivoAsyn}

