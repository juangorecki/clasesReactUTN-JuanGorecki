import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props"
const frutas =['manzanas', 'bananas', 'paltas', 'sandia']
const verduras =['papa', 'zanahoria', 'acelga', 'lechuga']
const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) =>{
    return(
        <div>
        <h2>Ejemplo de Props</h2>
        {/* propiedad simple y reutilizable */}
        <EjemploProps1 nombre= 'Flavia'/>
        {/* listado de elementos */}
        <EjemploProps2 elementos={frutas} />
        <EjemploProps2 elementos={verduras} />
        
        {/* multiples propiedades y destructuring*/}
        ejemplo noticia
        <EjemploProps3 titulo="Futbol Messi" subtitulo="Messi gano otra copa"
        cuerpo="messi gana la copa america  en su intento numero 5" />
        
        {/* si o si necesita pasarle en este caso mostratValor */}
        <EjemploProps4 cambiarValor={mostrarValor}/>
        {/* funcion vacia para que no se rompa la pag, no se rompe la pag pero en la consola no imprime nada ya que es una funcion vacia, si no le pongo  {()=> {}} (osea la funcion vacia), cuando quiera escribir en el input da error la pag*/}
        <EjemploProps4 cambiarValor={()=> {}}/>
        <EjemploProps5 />
        <EjemploProps5 eventoClick={mostrarValor} />


        </div>
    )
}

export default Ejemplo1