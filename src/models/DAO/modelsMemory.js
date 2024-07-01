import axios from "axios"

class LibroModel{
    constructor(){
        this.libros = [
            {
                codigo:1,
                titulo:"La metamorfosis",
                autor:"Franz Kafka",
                estado:"disponible",
            }

        ]
    }

    darAltaLibro = async (newLibro) => {
        try {
            newLibro.estado = "disponible"
            await this.libros.push(newLibro)
            return newLibro
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    darBajaLibro = async (codigo) => {
        try {
            const index = this.libros.findIndex((l) => l.codigo == codigo)
            if (index !== -1) {
                const libro = this.libros.splice(index, 1)
                return libro
            } else {
                throw new Error("Libro no encontrado")
            }
        } catch (error) {
            console.log("Error: ", error);
            throw error
        }
    }

    getLibros = async () => {
        try {
           return await this.libros
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    alquilarLibro = async (cod) => {
        try {
            const libro = await this.libros.find((l) => l.codigo == cod)
            if (libro) {
                if (libro.estado !== "alquilado" && libro.estado !== "no-apto") {
                    libro.estado = "alquilado"
                    return libro
                } else {
                    throw new Error("El libro no está disponible para alquiler.");
                }
            } else {
                throw new Error("Libro no encontrado.");
            }
        } catch (error) {
            console.log(error)
            throw error
        }   
    }   

    devolverLibro = async (cod) => {
        try {
            const libro = await this.libros.find((l) => l.codigo == cod)
            if (libro) {
                libro.estado = "disponible"
                return libro
            } 
        } catch (error) {
            console.log("Error: ", error);
        }   
    }

    marcarNoAptoLibro = async (cod) => {
        try {
            const libro = await this.libros.find((l) => l.codigo == cod)
            if (libro) {
                libro.estado = "no-apto"
                return libro
            } 
        } catch (error) {
            console.log("Error: ", error);
        }   
    }

    getLibrosPorEstado = async (estado) => {
        try {
            const librosPorEstado = await this.libros.filter((l) => l.estado == estado)
            if (librosPorEstado.length == 0){
                return `No hay libros con estado ${estado}`
            } else {
                return librosPorEstado
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    

}

export default LibroModel