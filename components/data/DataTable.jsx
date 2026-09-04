import React from "react";

/**
 * Data table. Column-driven: each column is { key, label, num?, render? }.
 * `num` right-aligns and tabular-aligns the column; `render(row)` lets a
 * cell return custom content (pills, money, actions). Wrap in a Card with
 * `bodyless` for the full panel look.
 */
export function DataTable({ columns = [], rows = [], dense = false, rowKey = "id", className = "" }) {
  return (
    <div className="fp-table-wrap">
      <table className={["fp-grid", dense ? "dense" : "", className].filter(Boolean).join(" ")}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={c.num ? "num" : ""} style={c.width ? { width: c.width } : undefined}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row[rowKey] ?? i}>
              {columns.map((c) => (
                <td key={c.key} className={c.num ? "num" : ""}>
                  {c.render ? c.render(row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
