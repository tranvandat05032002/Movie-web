import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase-config";

export default function addDocument(externalCollection, externalData) {
  const colRel = collection(db, externalCollection);
  addDoc(colRel, {
    ...externalData,
    createdAt: serverTimestamp(),
  })
    .then((sc) => {
      console.log("Add doc successfully!!!");
    })
    .catch((e) => {
      console.log(e.message);
    });
  return {};
}
