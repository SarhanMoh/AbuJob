import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
export function addBusiness(business , addComplete){

    firebase.firestore().collection('category')
    .add({
        category: business.category,
        name: business.name,
        phone_number: business.phone_number,
        language: business.language,
        address: business.address,
        createdAt: firebase.firestore.FieldValue.serverTimesTamp()
    }).then((data)=> addComplete(data))
    .catch((error)=> console.log(error)); 

}
export async function getBusiness(businessRetrieved){
   var businessList =[];
    var snapshot = await firebase.firestore()
   .collection('Business')
   .orderBy('createdAt')
   .get()

   snapshot.forEach((doc) =>{
     businessList.push(doc.data());
   });

   businessReceived(businessList);
}