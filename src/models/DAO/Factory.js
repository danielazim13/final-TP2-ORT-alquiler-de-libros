import modelsMemory from "./modelsMemory.js"

class ModelFactory{

    static get(type){
        switch (type) {
            case 'MEM':
                console.log("Persistiendo en Memoria!");
                return new modelsMemory()
            default:
                console.log("Persistiendo en Memoria (default)!")
                break;
        }
    }
    

}

export default ModelFactory