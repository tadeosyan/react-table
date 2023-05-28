export interface Product {
    id: string,
    name: string;
    description: string;
    date: string;
    status: string
}

export interface TableBodyProps {
    tableData: Product[];
    handleInputChange: (args: InputChangeArgs) => void;
    handleInputBlur: (args: InputChangeArgs) => void;
}

export type InputChangeArgs = {
    field: keyof Product,
    id: string,
    e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
}

export interface TableActionsProps {
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export type TableHeadProps = {
    setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
};