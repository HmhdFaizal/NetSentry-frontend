import React from "react";
export default function DataTable({ columns, rows, emptyMessage = "No records found." }) {
  return (
    <div className="table-scroll">
      <table className="data-table">
        <thead><tr>{columns.map(column => <th key={column.key}>{column.label}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, index) => <tr key={row.id || row.ip || row.alert_id || index}>{columns.map(column => <td key={column.key}>{column.render ? column.render(row[column.key], row) : (row[column.key] ?? "—")}</td>)}</tr>)}
          {!rows.length && <tr><td colSpan={columns.length} className="empty-cell">{emptyMessage}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
