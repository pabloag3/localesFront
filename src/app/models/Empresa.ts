export class Empresa{
    
    id_empresa: number;
    user_profile: number;
    descripcion: string;
    direccion: string;
    longitud: string;
    latitud: string;
    id_clasificacion_empresa: number;

    constructor(id_empresa, user_profile, descripcion, direccion, longitud, latitud, id_clasificacion_empresa) {
        this.id_empresa = id_empresa;
        this.user_profile = user_profile;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.longitud = longitud;
        this.latitud = latitud;
        this.id_clasificacion_empresa = id_clasificacion_empresa;
    }
}