import { collection, getDocs } from 'firebase/firestore';
import { firestore, firestoreAddDoc, firestoreGetDocs } from './config';

export const generateID = () => {
  const timestamp = new Date().getTime().toString();
  return timestamp;
};

export const generateTeamID = async (eventID) => {
  const querySnapshot = await getDocs(collection(firestore, 'teamID'));
  const size = querySnapshot.size + 1;
  const id = 'VPT-' + eventID + size.toString().padStart(4, '0');
  await firestoreAddDoc('teamID', { id: id });
  return id;
};
export const generateUserID = async () => {
  const querySnapshot = await getDocs(collection(firestore, 'userID'));
  const size = querySnapshot.size + 1;
  const id = 'VPU-' + size.toString().padStart(4, '0');
  await firestoreAddDoc('userID', { id: id });
  return id;
};

export const createUser = async (singleUser) => {
  const userData = { ...singleUser };
  const querySnapshot = await firestoreGetDocs(
    ['registerUsers'],
    ['email', '==', userData.email]
  );
  if (querySnapshot.size === 0) {
    const userId = await generateUserID();
    userData.userId = userId;
  } else {
    const userId = querySnapshot.docs[0].data().userId;
    userData.userId = userId;
  }
  await firestoreAddDoc('registerUsers', {
    ...userData,
  });
  return userData;
};
