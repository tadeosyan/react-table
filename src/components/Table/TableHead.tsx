import { TableHeadProps } from './types';

export const TableHead = ({ setFilterQuery }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>
          Name
          <input
            type="text"
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter Name"
          />
        </th>
        <th>
          Description
          <input
            type="text"
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter Description"
          />
        </th>
        <th>
          Date
          <input
            type="date"
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </th>
        <th>
          Status
          <select onChange={(e) => setFilterQuery(e.target.value)}>
            <option value={''}>Choose an option</option>
            <option value="active">active</option>
            <option value="pending">pending</option>
            <option value="canceled">canceled</option>
          </select>
        </th>
      </tr>
    </thead>
  );
};
