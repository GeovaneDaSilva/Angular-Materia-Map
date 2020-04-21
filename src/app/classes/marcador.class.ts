
// export class Marcador {

//     constructor( public lat: number, public lng: number ) { }

// }


export class Marcador {

    public lat: number;
    public lng: number;

    public titulo = 'Sin Título';
    public desc = 'Sin Descripción';


    constructor( lat: number,  lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }

}

