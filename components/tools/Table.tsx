import { FC } from "react";
import { useTable, useSortBy, useBlockLayout, useResizeColumns } from 'react-table';

import styles from "@components/tools/Table.module.css";

const Table: FC<{ columns: any, data: any} > = ({ columns, data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useBlockLayout,
      useSortBy,
      useResizeColumns
    )
  
    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows.slice(0, 20)
  
    return (
      <table {...getTableProps()} className={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}  className={styles.tr}>
              {headerGroup.headers.map((column: any) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps()}  className={styles.th}>
                    <span {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                    </span>
                  {/* Add a sort direction indicator */}
                  <span>
                    
                  </span>
                  <div
                      {...column.getResizerProps()}
                      className={`${styles.resizer} ${
                        column.isResizing ? styles.isResizing : ''
                      }`}
                    />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}  className={styles.tr}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}  className={styles.td}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
    )
}

export default Table;