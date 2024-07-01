import LibroModel from "../models/DAO/modelsMemory.js"
import axios from "axios"

class LibroServices {
    constructor(){
        this.model = new LibroModel
    }

    darAltaLibro = async (libro) => {
        const newLibro = await this.model.darAltaLibro(libro)
        return newLibro
    }

    darBajaLibro = async (codigo) => {
        const libro = await this.model.darBajaLibro(codigo)
        return libro
    }

    getLibros = async () => {
        const libros = await this.model.getLibros()
        return libros
    }

    alquilarLibro = async (cod) => {
        const libro = await this.model.alquilarLibro(cod)
        return libro
    }

    devolverLibro = async (cod) => {
        const libro = await this.model.devolverLibro(cod)
        return libro
    }

    marcarNoAptoLibro = async (cod) => {
        try {
            const libro = await this.model.marcarNoAptoLibro(cod);
            return libro;
        } catch (error) {
            throw error;
        }
    }

    getLibrosPorEstado = async (estado) => {
        const libros = await this.model.getLibrosPorEstado(estado)
        return libros
    }


}

export default LibroServices