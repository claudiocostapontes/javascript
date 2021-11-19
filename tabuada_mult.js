const  inputNumero  =  documento . getElementById ( 'inputNumero' ) ;
const  btnCalcular  =  document . getElementById ( 'btnCalcular' ) ;
const  outTabuada  =  document . getElementById ( 'outTabuada' ) ;

function  mostrarTabuada ( )  {

    deixe  numero  =  Number ( inputNumero . value ) ;
    let  tabuada  =  '' ;

    if  ( inputNumero . value  ==  ''  ||  isNaN ( numero ) )  {
        alert ( 'Digite um número!' ) ;
        inputNumero . valor  =  '' ;
        inputNumero . foco ( ) ;
        retorno ;
    }

    para  ( deixe  índice  =  1 ;  índice  <=  10 ;  índice ++ )  {
        tabuada  + =  ` $ { numero } x $ { index } = $ { numero  *  index } \ n` ;
    }

    outTabuada . textContent  =  ` $ { tabuada } ` ;
}

btnCalcular . addEventListener ( 'click' ,  mostrarTabuada );