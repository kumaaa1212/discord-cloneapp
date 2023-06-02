import React, { useEffect, useState } from 'react'
import { ChannelProps } from '../SideBar';
import { DocumentData, Query, collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';

const usecollection = (data:string) => {
  const [document, setdocument] = useState<ChannelProps[]>([]);
  const q:Query<DocumentData> = query(collection(db, data));
  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setdocument(cities);
    });
  }, []);
  return {document}
}

export default usecollection