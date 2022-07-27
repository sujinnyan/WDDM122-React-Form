// import {db} from "../firebase.config";
// import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";


// const sellCollectionRef = collection(db, "product");
// class SellDataService {
//     addProduct = (newProduct) => {
//         return addDoc(sellCollectionRef, newProduct);
//     };

//     updateProduct = (id, updatedProduct) => {
//         const productDoc = doc(db, "product", id);
//         return updateDoc(productDoc, updatedProduct);
//     };

//     deleteProduct = (id) => {
//         const productDoc = doc(db, "product", id);
//         return deleteDoc(productDoc);
//     };

//     getAllProduct = () => {
//         return getDocs(productCollectionRef);
//     };

//     getProduct = (id) => {
//         const productDoc = doc(db, "product", id);
//         return getDoc(productDoc);
//     };
// }

// export default new SellDataService();