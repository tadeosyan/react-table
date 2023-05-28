import { useEffect, useState } from 'react';
import { db } from 'firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Product } from '../types';

export const useFetchData = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const collectionRef = collection(db, 'products');

        const fetchProducts = async () => {
            try {
                const snapshot = await getDocs(collectionRef);
                const fetchedData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Product[];
                setProducts(fetchedData);
            } catch (error) {
                console.log('Error fetching data from Firebase:', error);
            }
        };

        fetchProducts();
    }, []);


    return { products, setProducts };
};