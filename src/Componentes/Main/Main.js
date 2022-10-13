import React from "react";

/* Componente de Clase*/

class Main extends React.Component {
    /* Funcion render es la encargada de renderisar el contenido que colocamos en el return */
    render (){
        return (
            <div className="Main">
                <div className="SubContents"></div>
                <div className="SubContents"></div>
                <div className="SubContents"></div>
                <div className="Advertisement"></div>
                
            </div>
        )
    }
}

export default Main;