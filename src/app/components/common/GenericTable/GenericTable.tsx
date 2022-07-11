import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidV4 } from "uuid";
import { GenericTableProps } from "./GenericTable.types";
import {
  ActionContainer,
  ActionsContainer,
} from "../../common/GenericTable/GenericTable.styles";

export const GenericTable = <T,>(props: GenericTableProps<T>) => {
  const { data, columns, rowActions } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ header }) => (
              <TableCell key={uuidV4()}>{header as string}</TableCell>
            ))}
            {rowActions && (
              <TableCell component="th" scope="row" key={uuidV4()}>
                Actions
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={uuidV4()}>
              {columns.map(({ header, renderCell, width }) => (
                <TableCell component="th" scope="row" key={uuidV4()} width={width}>
                  {renderCell
                    ? renderCell(row)
                    : (row[header] as unknown as string)}
                </TableCell>
              ))}
              {rowActions && (
                <ActionsContainer >
                  {rowActions.map(({ handler, renderAction }) => {
                    return (
                      <ActionContainer onClick={(_) => handler(row)} key={uuidV4()}>
                        {renderAction(row)}
                      </ActionContainer>
                    );
                  })}
                </ActionsContainer>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
