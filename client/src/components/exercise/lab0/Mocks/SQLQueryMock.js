/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const filterOptions = [
  "equals",
  "in",
  "notIn",
  "lessThan",
  "lessThanOrEqual",
  "greaterThan",
  "greaterThanOrEqual",
  "between",
  "not",
];

const SQLQueryMock = (props) => {
  const { query, columns, records } = props;

  const [columnWidths, setColumnWidths] = useState({});
  const [initialLoad, setInitialLoad] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const [filters, setFilters] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [activeRecords, setActiveRecords] = useState([]);
  const [allRecords, setAllRecords] = useState([...records]);

  const tempRecords = [...activeRecords, ...allRecords].sort((a, b) => {
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (typeof aValue === "boolean" && typeof bValue === "boolean") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return sortDirection === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    }
    return 0;
  });

  useEffect(() => {
    const calculateColumnWidths = () => {
      const widths = {};

      const getTextWidth = (text) => {
        if (!text) return 0;
        const str = String(text);
        const charWidth = 8;
        return str.length * charWidth;
      };

      columns.forEach((column) => {
        let maxWidth = getTextWidth(column);
        records.forEach((record) => {
          const cellWidth = getTextWidth(record[column]);
          maxWidth = Math.max(maxWidth, cellWidth);
        });
        widths[column] = Math.max(80, maxWidth + 64);
      });

      setColumnWidths(widths);
    };

    calculateColumnWidths();
  }, [columns, records]);

  const handleExecuteQuery = () => {
    if (initialLoad) {
      setInitialLoad(false);
    }

    setIsExecuting(true);
    setAllRecords(
      tempRecords.map((record) => ({
        ...record,
        active: false,
      })),
    );
    setActiveRecords([]);

    setTimeout(() => {
      setIsExecuting(false);
      setShowResults(true);
    }, 3000);
  };

  const handleSort = (column) => {
    setSortColumn(column);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleAddRecord = () => {
    const lastId = tempRecords.sort((a, b) => b.id - a.id)[0].id;
    setActiveRecords([
      ...activeRecords,
      {
        ...Object.fromEntries(columns.map((column) => [column, ""])),
        id: lastId + 1,
        active: true,
      },
    ]);
  };

  const handleRecordChange = (id, column, value) => {
    setActiveRecords(
      activeRecords.map((record) =>
        record.id === id ? { ...record, [column]: value } : record,
      ),
    );
  };

  return (
    <div className="tw-border tw-rounded-lg tw-overflow-hidden tw-shadow-xl tw-drop-shadow-xl tw-min-w-[56rem] tw-max-w-[56rem]">
      {/* SQL Query Header */}
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-b-none tw-p-2 tw-gap-x-2">
        <div className="tw-flex tw-w-full">
          <div className="tw-flex tw-items-center tw-bg-darkGray tw-rounded-l-md tw-px-4 tw-py-2">
            <span className="tw-font-bold tw-text-white">SQL</span>
          </div>
          <div className="tw-flex-1 tw-flex tw-bg-white tw-rounded-r-md tw-px-4 tw-py-2 tw-gap-x-3">
            <button
              className="tw-inline-flex tw-items-center tw-justify-center tw-border-0 tw-bg-[#4a5568] tw-rounded-md tw-px-3 tw-py-1.5 tw-drop-shadow tw-shadow"
              onClick={handleAddRecord}
            >
              <span className="tw-font-bold tw-text-xs tw-text-white">
                Add Record
              </span>
            </button>
            <button
              disabled={!activeRecords.length}
              onClick={handleExecuteQuery}
              className="tw-inline-flex tw-items-center tw-justify-center tw-border-0 tw-bg-[#31965e] tw-rounded-md tw-px-3 tw-py-1.5 tw-drop-shadow tw-shadow disabled:tw-bg-opacity-50"
            >
              <span className="tw-font-bold tw-text-xs tw-text-white">
                Execute
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* SQL Table */}
      <div className="tw-flex tw-flex-col tw-min-h-64">
        {initialLoad && !isExecuting && (
          <div className="tw-flex-1 tw-flex tw-justify-center tw-items-center tw-h-full">
            <span className="tw-font-bold">
              Click &quot;Execute&quot; to run the query.
            </span>
          </div>
        )}
        {isExecuting && (
          <div className="tw-flex-1 tw-flex tw-justify-center tw-items-center tw-h-full">
            <FontAwesomeIcon
              icon={faCircleNotch}
              className="tw-animate-spin tw-text-primary-blue tw-h-16 tw-w-16"
            />
          </div>
        )}
        {!isExecuting && showResults && (
          <div style={{ fontFamily: "JetBrains Mono, monospace" }}>
            <div className="tw-overflow-x-auto tw-max-h-[300px]">
              <table
                className="tw-table-auto tw-border-0"
                style={{ borderCollapse: "separate", borderSpacing: "0px" }}
              >
                <thead className="tw-sticky tw-top-0 tw-bg-white tw-shadow-lg">
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        className="tw-border-[#e2e8f0] tw-border-0 first:tw-border-l tw-border-y tw-border-r tw-bg-white tw-text-left"
                        style={{
                          minWidth: `${columnWidths[column]}px`,
                          maxWidth: `${columnWidths[column]}px`,
                        }}
                      >
                        <button
                          className="tw-w-full tw-h-full tw-px-4 tw-py-2 tw-bg-transparent tw-border-0 tw-flex tw-items-center tw-gap-x-3"
                          onClick={() => handleSort(column)}
                        >
                          <span className="tw-text-sm tw-font-bold">
                            {column}
                          </span>
                          {sortColumn === column && (
                            <FontAwesomeIcon
                              icon={
                                sortDirection === "asc"
                                  ? faCaretUp
                                  : faCaretDown
                              }
                            />
                          )}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* TODO: When id is updated, it triggers a re-render because we update the key component's key. lol */}
                  {tempRecords.map((record) => (
                    <tr
                      key={record.id}
                      className={
                        record.active
                          ? "tw-bg-primary-yellow tw-bg-opacity-25"
                          : ""
                      }
                    >
                      {columns.map((column) => (
                        <td
                          key={column}
                          className={twMerge(
                            "hover:tw-cursor-default tw-border-[#e2e8f0] tw-border-0 first:tw-border-l tw-border-r tw-border-b tw-text-left tw-text-sm tw-leading-tight tw-truncate",
                            record.active ? "tw-p-0" : "tw-p-4",
                          )}
                          style={{
                            minWidth: `${columnWidths[column]}px`,
                            maxWidth: `${columnWidths[column]}px`,
                          }}
                        >
                          {record.active ? (
                            <input
                              type="text"
                              className="tw-p-4 tw-w-full tw-h-full tw-bg-transparent tw-border-0 tw-outline-primary-blue hover:tw-cursor-pointer"
                              value={record[column]}
                              onChange={(e) =>
                                handleRecordChange(
                                  record.id,
                                  column,
                                  e.target.value,
                                )
                              }
                            />
                          ) : (
                            record[column]
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SQLQueryMock.propTypes = {
  name: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  records: PropTypes.array.isRequired,
};

export default SQLQueryMock;
