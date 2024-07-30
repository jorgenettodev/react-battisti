// este component irá interagir com um componente filho, passando uma função como prop e lidando com o evento do elemento filho

import FilhoFuncao from "./FilhoFuncao";

const PaiFunction = () => {
    const handleChildClick = () => 
        console.log('clicou no botao do elemento filho');

    return (
        <div>
            <FilhoFuncao onChildClick={handleChildClick}/>
        </div>
    )
}

export default PaiFunction;