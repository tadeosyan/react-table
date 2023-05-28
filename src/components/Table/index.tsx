import { useFetchData, useTableActions } from './hooks';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import tableStyles from './table.module.css';

export const Table: React.FC = () => {
  const { products, setProducts } = useFetchData();

  const {
    handleInputChange,
    handleInputBlur,
    filterTableData,
    setFilterQuery,
  } = useTableActions({
    products,
    setProducts,
  });

  return (
    <div className={tableStyles.container}>
      <h2>React Table</h2>
      <table>
        <TableHead setFilterQuery={setFilterQuery} />
        <TableBody
          tableData={filterTableData(products)}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
      </table>
    </div>
  );
};
