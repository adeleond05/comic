import { Injectable } from '@angular/core';

@Injectable()
export class PersonajeService {

    private personaje:Personaje[]=
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/img/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC",
              tipo:"Heroe"
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/img/batman.png",
              aparicion: "1939-05-01",
              casa:"DC",
              tipo:"Heroe"
            },
            {
              nombre: "Daredevil",
              bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
              img: "assets/img/daredevil.png",
              aparicion: "1964-01-01",
              casa: "Marvel",
              tipo:"Heroe"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/img/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel",
              tipo:"Heroe"
            },
            {
              nombre: "Linterna Verde",
              bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
              img: "assets/img/linterna-verde.png",
              aparicion: "1940-06-01",
              casa: "DC",
              tipo:"Heroe"
            },
            {
              nombre: "Spider-Man",
              bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
              img: "assets/img/spiderman.png",
              aparicion: "1962-08-01",
              casa: "Marvel",
              tipo:"Heroe"
            },
            {
              nombre: "Wolverine",
              bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
              img: "assets/img/wolverine.png",
              aparicion: "1974-11-01",
              casa: "Marvel",
              tipo:"Heroe"
            },
            {
              nombre: "Ultron",
              bio: "Ultrón lo tenía todo para ser el villano perfecto. Inteligente, intimidante, su historia tiene miga (surge de lo peor de Tony Stark) y eligieron a un excelente actor para darle vida. Sin embargo, Whedon no estuvo afortunado con el guion y Ultrón va de más a menos, terminando como un villano corriente. Aun así, tiene momentos extraordinarios, como la interrupción de la fiesta.",
              img: "assets/img/ultron.jpeg",
              aparicion: "2015-10-03",
              casa: "Marvel",
              tipo:"Villano"
            },
            {
              nombre: "Loki",
              bio: "El primer gran villano del MCU y, sin duda, el más divertido de todos. Es tan carismático que hemos podido verle en cinco películas, y a pesar de que ha ido evolucionando, siempre se ha mantenido fiel a su esencia. Tiene todos los elementos que quieres en un antagonista y está encarnado por un actor estupendo que entiende al personaje y se lo pasa genial en su piel. Ojalá volvamos a verle, es una gozada.",
              img: "assets/img/loki.jpeg",
              aparicion: "2011-05-03",
              casa: "Marvel",
              tipo:"Villano"
            },
            {
              nombre: "Joker",
              bio: "es un personaje creado por Bill Finger, Bob Kane y Jerry Robinson, e introducido en el primer ejemplar del comic book Batman, en abril de 1940, publicado por DC Comics. Se trata de uno de los criminales más notables de Gotham City, y es el enemigo principal de Batman",
              img: "assets/img/joker.jpeg",
              aparicion: "1970-05-03",
              casa: "DC",
              tipo:"Villano"
            },
            {
              nombre: "Thanos",
              bio: "Las dos películas más ambiciosas de Marvel Studios, con las que va a cerrar la exitosa etapa que arrancó 10 años atrás con 'Iron Man' (2008), necesitaban al villano definitivo y lo encontraron en Thanos. A falta de ver 'Vengadores 4', ya hemos conocido su historia, su motivación, su poder y, por primera vez en el género de superhéroes, su triunfo. Técnicamente es espectacular pero lo que queda es el personaje, a quien Brolin logra dar vida. Que un ser tan malvado termine sentándose a mirar el atardecer y te den ganas de aplaudirle, es su mayor victoria.",
              img: "assets/img/thanos.jpg",
              aparicion: "1980-05-03",
              casa: "Marvel",
              tipo:"Villano"
            },
            {
              nombre: "Brainiac",
              bio: "Otro villano de Superman. Este robot extraterrestre creado en 1958 por Otto Binder y Al Plastino es el responsable de convertir en miniatura la capital de Krypton, el planeta de donde viene Superman.",
              img: "assets/img/brainiac.jpg",
              aparicion: "1965-05-03",
              casa: "DC",
              tipo:"Villano"
            }
    ];

    constructor(){
        console.log("Servicio listo para usar!!");
    }

    //getHeros(){
    getPersonajes():Personaje[]{
        return this.personaje;
    }

    getPersonaje(id:number){
        return this.personaje[id];   
    }

    buscarPersonaje(palabra:string):Personaje[]{
      let personajeArr:Personaje[] = [];
      palabra = palabra.toLowerCase();
      for( let personaje of this.personaje){
        let nombre = personaje.nombre.toLowerCase();
        if(nombre.indexOf(palabra)>=0){
           personajeArr.push(personaje);
        }
      }
      return personajeArr;
    }

}

export interface Personaje{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string,
    tipo:string
}