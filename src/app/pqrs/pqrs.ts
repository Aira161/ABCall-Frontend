export class PQRS {
    nombre: string;
    email: string;
    asunto: string;
    peticion: string;

    constructor(
        nombre: string,
        email: string,
        asunto: string,
        peticion: string
    ){
        this.nombre = nombre,
        this.email = email,
        this.asunto = asunto,
        this.peticion = peticion
    }
}