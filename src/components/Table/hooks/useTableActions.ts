import { db } from 'firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { TableActionsProps, Product, InputChangeArgs } from "../types";
import { useState } from 'react';

export const useTableActions = ({ products, setProducts }: TableActionsProps) => {
    const [changedInputs, setChangedInputs] = useState<{ [key: string]: boolean }>({});
    const [filterQuery, setFilterQuery] = useState<string>('');

    const handleInputChange = ({ field, id, e }: InputChangeArgs) => {
        const { value } = e.target;
        setProducts((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );

        setChangedInputs((prevInputs) => ({
            ...prevInputs,
            [`${id}-${field}`]: true,
        }));
    };

    const handleInputBlur = async ({ field, id, e }: InputChangeArgs) => {
        const { value } = e.target
        const updatedProduct = products.find((item) => item.id === id);
        const isChanged = changedInputs[`${id}-${field}`];

        if (updatedProduct && isChanged) {
            const docRef = doc(db, 'products', id);

            try {
                await updateDoc(docRef, {
                    [field]: value,
                });

            } catch (error) {
                console.error('Error updating document:', error);
            } finally {
                setChangedInputs((prevInputs) => ({
                    ...prevInputs,
                    [`${id}-${field}`]: false,
                }));
            }
        }
    };

    const filterTableData = (data: Product[]) => {
        return data.filter((item) =>
            Object.keys(item).some((key) =>
                String(item[key as keyof Product])
                    .includes(filterQuery)
            )
        );
    };

    return { handleInputChange, handleInputBlur, filterTableData, setFilterQuery }
}