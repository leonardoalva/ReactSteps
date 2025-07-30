import {PacmanLoader} from "react-spinners";

export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (!props.items || props.items.length === 0) {
      // Si no hay items, mostramos un mensaje de carga
      // Puedes personalizar este mensaje o componente de carga
      // Aquí se muestra un simple párrafo como ejemplo
        return (<PacmanLoader className="Pacman"/>);}
    
    
    return <Component {...props}></Component>// 
    }



return ComponentWithLoading;
}