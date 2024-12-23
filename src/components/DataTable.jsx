import React from 'react';
import clsx from 'clsx';

const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, columnIndex) => (
                    <th key={columnIndex} className={
                        clsx(`px-6 py-3 border-b-2 text-left leading-4  tracking-wider`)
                    }>
                        {column.headerName}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

const TableBody = ({ columns, data }) => {
    return (
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-b">
                    {columns.map((column) => (
                        <td key={column.field} className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                            {row[column.field]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

const DataTable = ({ columns, data, bg = 'bg-white', text = 'text-black' }) => {
    if (!data || !columns) {
        console.error('DataTable: Missing data or columns props');
        return null;
    }

    return (
        <div className="overflow-x-auto">
            <table className={clsx("min-w-full", bg, text)}>
                <TableHeader columns={columns} bg={bg} text={text} />
                <TableBody columns={columns} data={data} bg={bg} text={text} />
            </table>
        </div>
    );
};

export default DataTable;