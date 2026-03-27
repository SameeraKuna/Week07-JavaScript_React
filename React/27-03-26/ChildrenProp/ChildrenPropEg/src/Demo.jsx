/*export default function Demo({name}){
    return (
        <h1>{name}</h1>
    )  
}*/

/*export default function Demo({children}){
    return  children;
}*/

export default function Demo({children}){
    return  (
        <>
        {children}
        <h1>I'm from Demo Component Return</h1>
        </>
        
    )
}