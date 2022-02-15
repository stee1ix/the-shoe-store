import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { auth } from "../authentication/authentication.services";

export const fetchPastOrders = async () => {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", auth.currentUser.uid)
  );

  const docs = [];

  const querySnapshot = await getDocs(q);
  await querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });

  return docs;
};
