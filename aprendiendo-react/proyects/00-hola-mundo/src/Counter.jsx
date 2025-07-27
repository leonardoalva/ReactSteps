import { useEffect,useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador ha cambiado: ${count}`);
        // Aquí podrías hacer algo más, como enviar el valor a un servidor
    }, [count]);

    const increment = () => {
        setCount(count + 1);}
    const decrement = () => {
        if (count > 0){
        setCount(count - 1)};
    };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;