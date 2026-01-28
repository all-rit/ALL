/* eslint react/prop-types: 0 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCaretDown,
  faCaretUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
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
  "not",
];

const SQLQueryMock = (props) => {
  const { columns, records, setComplete } = props;

  const [columnWidths, setColumnWidths] = useState({});
  const [initialLoad, setInitialLoad] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const [filters, setFilters] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  /* Records that are in the db */
  const [allRecords, setAllRecords] = useState([...records]);

  /* Records that are being created */
  const [activeRecords, setActiveRecords] = useState([]);

  /* Combined records */
  const [tempRecords, setTempRecords] = useState([]);

  useEffect(() => {
    const filteredSortedAllRecords = [...allRecords]
      .sort((a, b) => {
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
      })
      .filter((record) => {
        return filters.every((filter) => {
          const value = record[filter.column];
          const operator = filter.operator;
          const active = filter.active;

          if (!active) return true;

          switch (operator) {
            case "equals":
              return typeof value === "string"
                ? String(value) === String(filter.value)
                : Number(value) === Number(filter.value);
            case "in":
              return filter.value.includes(value);
            case "notIn":
              return !filter.value.includes(value);
            case "lessThan":
              return value < +filter.value;
            case "lessThanOrEqual":
              return value <= +filter.value;
            case "greaterThan":
              return value > +filter.value;
            case "greaterThanOrEqual":
              return value >= +filter.value;
            case "not":
              return value !== filter.value;
            default:
              return true;
          }
        });
      });

    // We don't want to perform the sort and filter on the active records (always have them at the top)
    setTempRecords([...activeRecords, ...filteredSortedAllRecords]);
  }, [activeRecords, allRecords, sortColumn, sortDirection, filters]);

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

  /**
   * Executes a query
   * @param {boolean} deleting - Whether the execution is deleting records
   */
  const handleExecuteQuery = (deleting) => {
    if (initialLoad) {
      setInitialLoad(false);
    }

    setIsExecuting(true);

    let newTempRecords = [...tempRecords];
    if (deleting) {
      newTempRecords = newTempRecords.filter((record) => !record.selected);
    }

    setAllRecords(
      newTempRecords.map((record) => ({
        ...record,
        active: false,
      })),
    );
    setActiveRecords([]);

    setTimeout(() => {
      setIsExecuting(false);
      setShowResults(true);
    }, 3000);

    setComplete(true);
  };

  /**
   * Sorts the records by a column in ascending or descending order
   * @param {string} column - The column to sort by
   */
  const handleSort = (column) => {
    setSortColumn(column);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  /**
   * Adds a record to the active array
   * These are records that are being created
   */
  const handleAddRecord = () => {
    const lastId = Number(getLastId(tempRecords)) || 0;
    setActiveRecords([
      {
        ...Object.fromEntries(columns.map((column) => [column, ""])),
        id: lastId + 1,
        active: true,
      },
      ...activeRecords,
    ]);
  };

  /**
   * Adds a filter to the filters array
   * Active refers to whether the filter is being used in the query
   * By default, filters are inactive because the value is an empty string
   */
  const handleAddFilter = () => {
    const lastId = getLastId(filters);
    setFilters([
      {
        id: lastId + 1,
        column: "id",
        operator: "equals",
        value: "",
        active: false,
      },
      ...filters,
    ]);
  };

  /**
   * Helper function to get the last id of an array
   * @param {Array} array - The array to get the last id of
   * @returns {number} The last id of the array
   */
  const getLastId = (array) => {
    return array.length === 0 ? -1 : +array.sort((a, b) => b.id - a.id)[0].id;
  };

  /**
   * Updates a record in the active records array
   * @param {number} id - The id of the record to update
   * @param {string} column - The column to update
   * @param {string} value - The new value for the column
   */
  const handleRecordChange = (id, column, value) => {
    setActiveRecords((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, [column]: value } : record,
      ),
    );
  };

  /**
   * Updates the selected state of a record
   * @param {number} id - The id of the record to update
   * @param {boolean} selected - The new selected state of the record
   */
  const handleCheckboxChange = (id, selected) => {
    setTempRecords((prev) =>
      prev.map((record) =>
        record.id === id ? { ...record, selected: selected } : record,
      ),
    );
  };

  /**
   * Updates a filter in the filters array
   * If the value is an empty string, the filter becomes inactive
   * @param {number} id - The id of the filter to update
   * @param {string} key - The key to update
   * @param {string} value - The value to update the key with
   */
  const handleFilterChange = (id, key, value) => {
    const obj = { [key]: value };

    // Are we modifying the filter value?
    if (key === "value") {
      obj.active = value !== "";
    }

    setFilters((prev) =>
      prev.map((filter) =>
        filter.id === id ? { ...filter, [key]: value, ...obj } : filter,
      ),
    );
  };

  /**
   * Deletes a filter from the filters array
   * @param {number} id - The id of the filter to delete
   */
  const handleDeleteFilter = (id) => {
    setFilters((prev) => prev.filter((filter) => filter.id !== id));
  };

  const selectedRecordsCount = tempRecords.filter(
    (record) => record.selected,
  ).length;
  const showDeleteButton = selectedRecordsCount > 0;

  return (
    <div className="tw-border tw-rounded-lg tw-overflow-hidden tw-shadow-xl tw-drop-shadow-xl tw-min-w-[56rem] tw-w-full">
      {/* SQL Query Header */}
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-b-none tw-p-2 tw-gap-x-2">
        <div className="tw-flex tw-w-full">
          <div className="tw-flex tw-items-center tw-bg-darkGray tw-rounded-l-md tw-px-4 tw-py-2">
            <span className="tw-font-bold tw-text-white">SQL</span>
          </div>
          <div className="tw-flex-1 tw-flex tw-flex-col tw-bg-white tw-rounded-r-md tw-px-4 tw-py-3 tw-gap-y-3">
            {/* Options */}
            <div className="tw-flex tw-gap-x-3">
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-border-0 tw-bg-[#718096] tw-rounded-md tw-rounded-r-xl tw-drop-shadow tw-shadow"
                onClick={handleAddFilter}
              >
                <span className="tw-px-3 tw-py-1.5 tw-font-bold tw-text-xs tw-text-white">
                  Filters
                </span>
                <span className="tw-px-3 tw-py-1.5 tw-font-bold tw-text-xs tw-text-[#374151] tw-bg-[#cbd5e0] tw-rounded-md tw-rounded-l-none">
                  {filters.length}
                </span>
              </button>
              <button
                className="tw-inline-flex tw-items-center tw-justify-center tw-border-0 tw-bg-[#4a5568] tw-rounded-md tw-px-3 tw-py-1.5 tw-drop-shadow tw-shadow"
                onClick={handleAddRecord}
              >
                <span className="tw-font-bold tw-text-xs tw-text-white">
                  Add Record
                </span>
              </button>
              <button
                disabled={!activeRecords.length && !showDeleteButton}
                onClick={() => handleExecuteQuery(showDeleteButton)}
                className={twMerge(
                  "tw-inline-flex tw-items-center tw-justify-center tw-border-0 tw-rounded-md tw-px-3 tw-py-1.5 tw-drop-shadow tw-shadow disabled:tw-bg-opacity-50",
                  showDeleteButton ? "tw-bg-[#f35a5a]" : "tw-bg-[#31965e]",
                )}
              >
                <span className="tw-font-bold tw-text-xs tw-text-white">
                  {showDeleteButton
                    ? `Delete ${selectedRecordsCount} ${selectedRecordsCount === 1 ? "record" : "records"}`
                    : "Execute"}
                </span>
              </button>
            </div>
            {/* Filters Dropdown */}
            {filters.length > 0 && (
              <div className="tw-flex tw-flex-col tw-gap-y-3">
                {filters.map((filter) => (
                  <div key={filter.id} className="tw-flex tw-gap-x-3">
                    <div className="tw-flex tw-items-center tw-bg-[#cbd5e0] tw-rounded-md tw-px-2 tw-py-1">
                      <span className="tw-font-bold tw-text-xs tw-text-[#718096]">
                        WHERE
                      </span>
                    </div>
                    <div className="tw-flex tw-items-center tw-bg-[#cbd5e0] tw-rounded-md tw-px-2 tw-py-1">
                      <select
                        className="tw-bg-transparent tw-border-0 tw-outline-none tw-font-bold tw-text-xs tw-text-[#374151]"
                        value={filter.column}
                        onChange={(e) =>
                          handleFilterChange(
                            filter.id,
                            "column",
                            e.target.value,
                          )
                        }
                      >
                        {columns.map((column) => (
                          <option key={column} value={column}>
                            {column}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="tw-flex tw-items-center tw-bg-[#cbd5e0] tw-rounded-md tw-px-2 tw-py-1">
                      <select
                        className="tw-bg-transparent tw-border-0 tw-outline-none tw-font-bold tw-text-xs tw-text-[#374151]"
                        value={filter.operator}
                        onChange={(e) =>
                          handleFilterChange(
                            filter.id,
                            "operator",
                            e.target.value,
                          )
                        }
                      >
                        {filterOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="tw-flex tw-items-center tw-bg-[#cbd5e0] tw-rounded-md tw-px-2 tw-py-1">
                      <input
                        className="tw-bg-transparent tw-border-0 tw-outline-none tw-font-bold tw-text-xs tw-text-[#374151]"
                        type="text"
                        value={filter.value}
                        onChange={(e) =>
                          handleFilterChange(filter.id, "value", e.target.value)
                        }
                      />
                    </div>
                    <button
                      className="tw-flex tw-items-center tw-border-0 tw-bg-[#cbd5e0] tw-rounded-md tw-p-2"
                      onClick={() => handleDeleteFilter(filter.id)}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="tw-text-[#374151] tw-w-3 tw-h-3"
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
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
                {/* Table Header */}
                <thead className="tw-sticky tw-top-0 tw-bg-white tw-shadow-md">
                  <tr>
                    <th className="tw-border-[#e2e8f0] tw-border-0 tw-border-x tw-border-y tw-bg-white tw-text-left" />
                    {columns.map((column) => (
                      <th
                        key={column}
                        className="tw-border-[#e2e8f0] tw-border-0 tw-border-y tw-border-r tw-bg-white tw-text-left"
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
                {/* Table Body */}
                <tbody>
                  {/* TODO: When id is updated, it triggers a re-render because we update the key component's key. lol */}
                  {tempRecords.map((record) => (
                    <tr
                      key={record.id}
                      className={twMerge(
                        record.selected &&
                          "tw-bg-primary-blue tw-bg-opacity-25",
                        record.active &&
                          !record.selected &&
                          "tw-bg-primary-yellow tw-bg-opacity-25",
                      )}
                    >
                      <td className="tw-p-4 tw-border-0 tw-border-[#e2e8f0] tw-border-x tw-border-b">
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full">
                          <input
                            type="checkbox"
                            className="tw-w-4 tw-h-4 tw-accent-primary-blue tw-cursor-pointer"
                            checked={record.selected || false}
                            onChange={(e) =>
                              handleCheckboxChange(record.id, e.target.checked)
                            }
                          />
                        </div>
                      </td>
                      {columns.map((column) => (
                        <td
                          key={column}
                          className={twMerge(
                            "hover:tw-cursor-default tw-border-0 tw-border-[#e2e8f0] tw-border-r tw-border-b tw-text-left tw-text-sm tw-leading-tight tw-truncate",
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

export default SQLQueryMock;
