export class Empresa{
    
    id_empresa: number;
    descripcion: string;
    direccion: string;
    longitud: string;
    latitud: string;
    id_clasificacion_empresa: number;
    clasificacion_empresa: string;

    constructor(id_empresa, descripcion, direccion, longitud, latitud, id_clasificacion_empresa, clasificacion_empresa) {
        this.id_empresa = id_empresa;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.longitud = longitud;
        this.latitud = latitud;
        this.id_clasificacion_empresa = id_clasificacion_empresa;
        this.clasificacion_empresa = clasificacion_empresa;
    }
}