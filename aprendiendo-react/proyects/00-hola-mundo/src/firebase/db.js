import { 
    getFirestore,
    collection,
    getDocs,
    query,
    where

} from "firebase/firestore";
import {app} from './config'

const db = getFirestore(app);


export const getProducts = async () => {
    const documentos = await getDocs(collection(db, "productos"));
    const productos =[]

     documentos.forEach((doc) => {
         productos.push({...doc.data(), id: doc.id})
 })
    return productos
}


export const getProductsByCategory = async(categoria)=>{
const q = query(collection(db, "productos"), where("categoria", "==", categoria));
const querySnapshot = await getDocs(q);
const productos = []

querySnapshot.forEach((doc) => {
    productos.push({...doc.data, id: doc.id})
})
return productos
}