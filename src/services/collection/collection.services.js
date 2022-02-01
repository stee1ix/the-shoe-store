import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase/firebase.config";

const db = getFirestore(app);

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
