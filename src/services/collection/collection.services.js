import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const collectionRequestAndTransform = async (name, category) => {
  const docs = [];
  const querySnapshot = await getDocs(
    collection(db, `collection/${name}/${category}`)
  );
  await querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  return docs;
};
