//objetos
//objeto normal
let persona = {nombre:'Cristian',apellido:'Calle',edad:28};
//presentacion del objeto
console.log(persona);

function nuevaPersona(nombre,apellido,edad)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//creamos una persona apartir de su constructor definido 
let persona1 = new nuevaPersona('Cristian','Eduardo',29);

//presentamos la persona1

//arreglo de objetos
let listPersonas =[];
const llenarListaPersonas = ()=>
{
    for(let i=0; i< 10; i++)
    {
        let personaAdd = new nuevaPersona('Cristian','Eduardo',29);
        listPersonas.push(personaAdd);
        console.log(i);
    }

} 
//presentacion
console.log(llenarListaPersonas());
console.log(listPersonas);