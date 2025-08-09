import { useEffect,useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Aquí podrías hacer algo más, como enviar el valor a un servidor
    }, [count]);

    const increment = () => {
        setCount(count + 1);}
    const decrement = () => {
        if (count > 0){
        setCount(count - 1)};
    };

  return (
    <>
      <h1>{count}</h1>
    <div className="Container-Counter">
      <button className={"boton-Compra"} onClick={increment}>+</button>
      <button className={"boton-Compra"} onClick={decrement}>-</button>
    </div>
    </>
  );
}

export default Counter;