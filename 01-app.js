//2 * 1 = 2
//2 * 2 = 4
//2 * 3 = 6
//......

//desactivemos autoguadado
const colors =require('colors');
console.log('=========================='.green);
console.log('========Tabla============='.red);
console.log('=========================='.green);
let base=3;

for (let i = 0; i <= 10; i++) {
    console.log(`${base} * ${i} = ${base * i}`);    
}


//****************************************************************************************** */
//http://node.org    //docum    //api  //filesystem
const fs=require('fs');
//ahora buscar write file y lo copiadmos,  ¿a que se les parece?

fs.writeFile('message.txt', 'Hola Mundo', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido guardado');
});



//****************************************************************************************** */

//ahora el ejercicio de la tabla en un archivo
let data='';
for (let i = 0; i <= 10; i++) {
    data+=`${base} * ${i} = ${base * i}\n`;    
}

fs.writeFile('tabla-2', data, (err) => {
    if (err) throw err;
    console.log('El archivo tabla-2 sido guardado');
});
//hacer ejemplo con el 5, queda en el archivo tabla-2
//hacer literal en nombre y clg




//****************************************************************************************** */
//crear carpeta tablas
for (let i = 0; i <= 10; i++) {
    data+=`${base} * ${i} = ${base * i}\n`;    
}

fs.writeFile(`tablas/tabla${base}`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} sido guardado`);
});




//******************************************************************************************************** */
//lo normal es que nuestro archivo app.js, sea lo mas sencillo posible, vamos a limpiar esto
//quiero que lo que llevamos ahora lo podamos usar de la siguiente forma
//crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`));
console.log(module);
//const multiplicar=require('./multiplicar/multiplicar')
//usar multiplicar.crearArchivo
const {crearArchivo,crearArchivoAsyn}=require('./multiplicar/multiplicar')//usar crearArchivo  ... desestructuracion
crearArchivo(12).then(archivo => console.log(`Archivo creado: ${archivo}`));


//******************************************************************************************************** */
//si quisiera no una promesa si no un async
//SI QUISIERA PONER AWAIT..... LO SIGUIENTE SINO LLAMER NORMAL

crearArchivoAsync('p').then(archivos => console.log(`Archivo creadooop: ${archivos}`)).catch(err => console.log(err.message));




//******************************************************************************************************** */
//ahora hagamos que el parametro dela base venga de la linea de comandos
//ej npm install bootstrap
//vue create nombre


//MISMO PROYECTO PERO RECIBIENDO UN PARAMETRO DESDE LA CONSOLA CORRER CON NODE
//prboar esto en la linea de comandos
// node app --base=5
//node app --base=5 a bc d e
//    console.log(process);
// console.log(process.argv); //path de node y del proyecto

    // let argv=process.argv;
    // let parametro=argv[2];

    // console.log(parametro);

    // let base=parametro.split("=")[1];
    // console.log(base);

    // crearArchivo(base)
    //     .then(archivo=>console.log(`Archivo Creado: ${archivo}`))
    //     .catch((err)=> console.log(err))

    //este process es muy util en muchas situaciones, mas aelante lo vamos a usar
    //cuando despleguemos nuestra aplicacion eh heroku.
    // node app --hasta=5 base=5
    // node --help
//npm init  //CREACION PACKAGE.JSON
