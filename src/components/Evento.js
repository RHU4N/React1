import Button from "./evento/Button";

function Evento(){
    function primeiro(){
        alert('Primeiro');
    }
    function segundo(){
        alert('2°')
    }

    return(
        <div>
            <p>Eventos dos botões</p>
            <Button evento={primeiro} texto="Meu btn 1"/>
            <Button evento={segundo} texto="Meu btn 2"/>
        </div>
    )
}