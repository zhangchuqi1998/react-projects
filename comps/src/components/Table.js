import { Fragment } from "react";

function Table({data, config, keyFn}) {

    const renderedHeaders = config.map((column) => {
        if (column.header) return <Fragment key={column.label}>{column.header()}</Fragment> ;

        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((rowData) => {

        const renderedList = config.map((con) => {
            return <td className="p-3" key={con.label}>{con.render(rowData)}</td>
        })

        return (
            <tr className="border-b" key={keyFn(rowData )}>
                {renderedList}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;