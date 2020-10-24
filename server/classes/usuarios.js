// creacion de clase llamada usuarios
class Usuarios {
    // constructor
    constructor() {
        // se define un arreglo vació 
        this.personas = [];
    }

    // metodo de agregar persona con los 3 párametros el id, el nombre y la sala
    agregarPersona(id, nombre, sala) {
        // creo la persona
        let persona = { id, nombre, sala };
        // se agrega al arreglo personas.
        this.personas.push(persona);
        // y se retorna el arreglo de todas las personas
        return this.personas;
    }

    // metodo de buscar una persona con 1 párametro (id)
    getPersona(id) {
        // buscar en el arreglo personas y se retorna
        let persona = this.personas.filter(persona => {
            // comparar el id 
            return persona.id === id
                // el [0] es para regresar el primer elemento que coinsida con el (id)
        })[0];
        // retornar la persona encontrada
        return persona;
    }

    // metodo para traer todas la personas
    getPersonas() {
        // regresa todo el objeto de personas.
        return this.personas;
    }

    // metodo de salas
    getPersonasPorSala(sala) {
        // nuevo arreglo el cual resive un filter que resive como argumento la persona por cad iteracion
        // luego se retorna la persona.sala si es igual a la sala que le pasa anteriormente como argumento.        
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    // metodo para borrar a una persona con 1 parametro (id)
    borrarPersona(id) {
        // para guardar la referencia de la persona que vamos a borrar
        let personaBorrada = this.getPersona(id);
        // con esto la borramos
        this.personas = this.personas.filter(persona => persona.id != id);
        // retornamos a la persona que se borro
        return personaBorrada;
    }
}
// con esto esportamos la clase para usarla en otros archivos
module.exports = {
    Usuarios
}