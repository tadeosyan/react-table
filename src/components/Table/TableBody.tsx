import { Product, TableBodyProps } from './types';
import tableStyles from './table.module.css';

export const TableBody = ({
  tableData,
  handleInputChange,
  handleInputBlur,
}: TableBodyProps) => {
  return (
    <tbody>
      {tableData.map(
        ({ id, name, description, date, status }: Product) => (
          <tr key={id}>
            <td className={tableStyles.tableId}>{id}</td>
            <td>
              <input
                name="name"
                value={name}
                type="text"
                onChange={(e) =>
                  handleInputChange({ field: 'name', id, e })
                }
                onBlur={(e) =>
                  handleInputBlur({ field: 'name', id, e })
                }
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="description"
                value={description}
                type="text"
                onChange={(e) =>
                  handleInputChange({ field: 'description', id, e })
                }
                onBlur={(e) =>
                  handleInputBlur({ field: 'description', id, e })
                }
                placeholder="Type Description"
              />
            </td>
            <td>
              <input
                name="date"
                type="date"
                value={date}
                onChange={(e) =>
                  handleInputChange({ field: 'date', id, e })
                }
                onBlur={(e) =>
                  handleInputBlur({ field: 'date', id, e })
                }
              />
            </td>
            <td>
              <select
                name="status"
                value={status}
                onChange={(e) =>
                  handleInputChange({ field: 'status', id, e })
                }
                onBlur={(e) =>
                  handleInputBlur({ field: 'date', id, e })
                }
              >
                <option value="active">active</option>
                <option value="pending">pending</option>
                <option value="canceled">canceled</option>
              </select>
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};
