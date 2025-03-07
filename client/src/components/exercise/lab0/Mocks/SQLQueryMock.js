/* eslint-disable no-unused-vars */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const SQLQueryMock = (props) => {
  const { query, columns, records } = props;

  const [columnWidths, setColumnWidths] = useState({});
  const [initialLoad, setInitialLoad] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
        widths[column] = Math.max(80, maxWidth + 48);
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

    setTimeout(() => {
      setIsExecuting(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="tw-border tw-rounded-lg tw-overflow-hidden tw-shadow-xl tw-drop-shadow-xl">
      {/* SQL Query Header */}
      <div className="tw-flex tw-bg-primary-yellow tw-rounded-lg tw-rounded-b-none tw-p-2 tw-gap-x-2">
        <div className="tw-flex tw-w-full">
          <div className="tw-bg-darkGray tw-rounded-l-md tw-px-4 tw-py-2">
            <span className="tw-font-bold tw-text-white">SQL</span>
          </div>
          <div className="tw-flex-1 tw-bg-white tw-rounded-r-md tw-px-4 tw-py-2">
            {/* TODO: Maybe we can do drop/select options rather than raw queries */}
            <span>{query}</span>
          </div>
        </div>
        <div className="tw-inline-flex">
          <button
            className="tw-bg-[#31B148] tw-drop-shadow-md tw-shadow-md tw-ring-0 tw-border-0 tw-rounded-md tw-px-4 tw-py-2"
            onClick={handleExecuteQuery}
          >
            <span className="tw-font-bold tw-text-white">Execute</span>
          </button>
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
                className="tw-w-full tw-table-auto tw-border-0"
                style={{ borderCollapse: "separate", borderSpacing: "0px" }}
              >
                <thead className="tw-sticky tw-top-0 tw-bg-white tw-shadow-lg">
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        className="tw-border-[#e2e8f0] tw-border-0 first:tw-border-l tw-border-y tw-border-r tw-bg-white tw-px-4 tw-py-2 tw-text-left tw-text-sm"
                        style={{ minWidth: `${columnWidths[column]}px` }}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record.id}>
                      {columns.map((column) => (
                        <td
                          key={column}
                          className="tw-border-[#e2e8f0] tw-border-0 first:tw-border-l tw-border-r tw-border-b tw-px-4 tw-py-2 tw-text-left tw-text-sm tw-leading-tight"
                          style={{ minWidth: `${columnWidths[column]}px` }}
                        >
                          {record[column]}
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
