/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';

import firebase from 'firebase/app';

import { fireDB as db } from './firebase';

type FieldPath = firebase.firestore.FieldPath;
type OrderByDirection = firebase.firestore.OrderByDirection;
type DocumentReference = firebase.firestore.DocumentReference;

type Collection = 'appointments' | 'forUserSettings';

export interface IAppointment {
  id?: string;
  order?: number;
  day: string;
  actualDuration: number;
  expectedDuration: number;
  message: string;
  initialHour?: string;
  finalHour?: string;
  uid?: string;
}

type CollectionData = IAppointment;

interface IListConfig {
  order?: { field: string; direction: OrderByDirection | undefined };
  condition?: { field: string | FieldPath; equalTo: string }[];
}

export const fireData = {
  create: async (
    collection: Collection,
    data: CollectionData
  ): Promise<DocumentReference> => {
    try {
      const docRef = await db.collection(collection).add(data);

      toast.success('Adição realizada com sucesso!');

      return docRef;
    } catch (error) {
      toast.error('A não pode ser realizada!');
      return error;
    }
  },
  list: async (
    collection: Collection,
    config?: IListConfig
  ): Promise<any[]> => {
    try {
      const queryCollection = db.collection(collection);
      let querySnapshot: any;

      if (config) {
        if (config.condition) {
          config.condition.forEach((c) => {
            if (querySnapshot) {
              querySnapshot = querySnapshot.where(c.field, '==', c.equalTo);
            } else {
              querySnapshot = queryCollection.where(c.field, '==', c.equalTo);
            }
          });
        } else if (config.order) {
          querySnapshot = queryCollection.orderBy(
            config.order.field,
            config.order.direction
          );
        } else {
          querySnapshot = queryCollection;
        }
      } else {
        querySnapshot = queryCollection;
      }

      querySnapshot = await querySnapshot.get();

      const data: any[] = [];

      querySnapshot.forEach((doc: any) =>
        data.push({ id: doc.id, ...doc.data() })
      );

      return data;
    } catch (error) {
      toast.error('Erro ao realizar a listagem!');

      return error;
    }
  },
  update: async (collection: Collection, data: any): Promise<any> => {
    try {
      await db.collection(collection).doc(data.id).set(data);

      toast.success(`Atualização realizada com sucesso!`);
      return `${data.id} atualizado`;
    } catch (error) {
      toast.error(`Erro ao realizar atualização!`);

      return error;
    }
  },
  delete: async (collection: Collection, id: string): Promise<any> => {
    try {
      await db.collection(collection).doc(id).delete();

      toast.success('Item deletado com sucesso!');
      return `${id} deletado`;
    } catch (error) {
      toast.error('Erro ao deletar item!');

      return error;
    }
  },
};
