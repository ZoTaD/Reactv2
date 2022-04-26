import { useEffect, useState } from 'react'

const Contador = () => {
    console.log('Render del componente')
    const [count, setCount] = useState(0)

    useEffect( () => {
        console.log('El componente se monto');
    } , [])

    useEffect( () => {
        console.log('El estado cambio');
    } , [count])

    const addHandler = () => {
        console.log('se esta sumando');
        setCount(count + 1)
    }


    const resHandler = () => {
        console.log('se esta restando');
        setCount(count - 1)
    }

  return (
    <>
    <div>Contador</div>
    <button onClick={resHandler} > - </button>
    <strong> {count} </strong>
    <button onClick={addHandler}> + </button>
    </>
  )
}

function ItemCount({ stock, initial,  onAdd }) {
    
   }
   
<ItemCount stock = "5" initial= "1" /> 




export default Contador