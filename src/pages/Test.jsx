import { collection, getDocs, query } from 'firebase/firestore';
import React from 'react';
import { firestore } from '../utils/config';

const Test = () => {
  const firestoreGet = async () => {
    const q = query(collection(firestore, 'registerTickets'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  };
  return <button onClick={firestoreGet}>Click</button>;
};

export default Test;
