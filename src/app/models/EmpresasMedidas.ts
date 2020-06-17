export class EmpresasMedidas {

    cod_empresa_medida: number;
    id_empresa: number;
    id_medida_sanitaria: number;
    medida_sanitaria: string;

    constructor(cod_empresa_medida, id_medida_sanitaria, id_empresa, medida_sanitaria) {
        this.cod_empresa_medida = cod_empresa_medida;
        this.id_empresa = id_empresa;
        this.id_medida_sanitaria = id_medida_sanitaria;
        this.medida_sanitaria = medida_sanitaria;
    }

}