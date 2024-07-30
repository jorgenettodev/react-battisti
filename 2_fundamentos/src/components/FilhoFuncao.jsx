// este component será filho do component pai e irá receber uma função como prop
const FilhoFuncao = ({onChildClick}) => {
    return (
        <button onClick={onChildClick}>Botao do elemento filho</button>
    )
}

export default FilhoFuncao;