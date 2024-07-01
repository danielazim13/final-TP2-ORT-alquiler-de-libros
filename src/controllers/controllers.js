import LibroServices from "../services/services.js"

class LibroController {
    constructor(){
        this.services = new LibroServices()
    }

    darAltaLibro = async (req, res) => {
        try {
            const libro = req.body
            const newLibro = await this.services.darAltaLibro(libro)
            res.send(newLibro)
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    darBajaLibro = async (req, res) => {
        try {
            const {codigo} = req.params
            const libro = await this.services.darBajaLibro(codigo)
            if (libro) {
                res.send(libro)
            } else {
                res.status(404).send({ statusCode: 404, errorMsg: "Libro no encontrado." })
            }
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    getLibros = async (req, res) => {
        try {
            const libros = await this.services.getLibros()
            res.send(libros)
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    alquilarLibro = async (req, res) => {
        try {
            const {codigo} = req.params
            const libro = await this.services.alquilarLibro(codigo)
            if (libro) {
                res.send(libro)
            } else {
                res.status(404).send({ statusCode: 404, errorMsg: "Libro no encontrado." })
            }
        } catch (error) {
            if (error.message === "El libro no está disponible para alquiler.") {
                res.status(400).send({ statusCode: 400, errorMsg: error.message });
            } else {
                console.log(error);
                res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
            }
        }
    }

    devolverLibro = async (req, res) => {
        try {
            const {codigo} = req.params
            const libro = await this.services.devolverLibro(codigo)
            if (libro) {
                res.send(libro)
            } else {
                res.status(404).send({ statusCode: 404, errorMsg: "Libro no encontrado." })
            }
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    marcarNoAptoLibro = async (req, res) => {
        try {
            const {codigo} = req.params
            const libro = await this.services.marcarNoAptoLibro(codigo)
            if (libro) {
                res.send(libro)
            } else {
                res.status(404).send({ statusCode: 404, errorMsg: "Libro no encontrado." })
            }
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    getLibrosDisponibles = async (req, res) => {
        try {
            const librosDisponibles = await this.services.getLibrosPorEstado("disponible")
            res.send(librosDisponibles)
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    getLibrosAlquilados = async (req, res) => {
        try {
            const librosAlquilados = await this.services.getLibrosPorEstado("alquilado")
            res.send(librosAlquilados)
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

    getLibrosNoAptos = async (req, res) => {
        try {
            const librosNoAptos = await this.services.getLibrosPorEstado("no-apto")
            res.send(librosNoAptos)
        } catch (error) {
            console.log("Error: ", error);
            res.status(500).send({ statusCode: 500, errorMsg: "Internal server error." });
        }
    }

}

export default LibroController