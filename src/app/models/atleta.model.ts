export interface IAtleta{
        id:                         number;
        nombre:                     string;
        apellido:                   string;
        nacionalidad:               string;
        dni:                        number;
        numeroDePasaporte:          string;
        direccion:                  string;
        emailDelAtleta:             string;
        fechaDeNacimientoDelAtleta: Date;
        celularDelAtleta:           string;
        club:                       string;
        obraSocial:                 string;
        numeroCarnetObraSocial:     number;
        permisoDeViaje:             string;
        beca:                       string;
        fotoDniFrontal:             string;
        fotoDniDorsal:              string;
        fotoPasaporteFrontal:       string;
        fotoPasaporteDorsal:        string;
        madreAtletaId:              number;
        padreAtletaId:              number;
        tutorAtletaId:              number;
}