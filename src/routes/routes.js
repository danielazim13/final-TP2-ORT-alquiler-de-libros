import express from "express"
import LibroController from "../controllers/controllers.js"

class Router {
    constructor(){
        this.router = express.Router()
        this.controller = new LibroController()
    }

    start(){
        this.router.post("/libro", this.controller.darAltaLibro)
        this.router.delete("/libro/:codigo", this.controller.darBajaLibro)
        this.router.get("/libro", this.controller.getLibros)
        this.router.put("/libro/alquilar/:codigo", this.controller.alquilarLibro)
        this.router.put("/libro/devolver/:codigo", this.controller.devolverLibro)
        this.router.put("/libro/marcarNoApto/:codigo", this.controller.marcarNoAptoLibro)
        this.router.get("/libro/disponibles", this.controller.getLibrosDisponibles)
        this.router.get("/libro/alquilados", this.controller.getLibrosAlquilados)
        this.router.get("/libro/noAptos", this.controller.getLibrosNoAptos)


        return this.router
    }
}

export default Router