export const withLoading = (Component) =>{
    function ComponentWithLoading (props){
        console.log('Loading...')
        return (
            <Component {...props} />
        )
    }

    return ComponentWithLoading;
}