import React from "react";
import { TitleAreaContainer } from "./TitleArea.styles";
import Typography from "@mui/material/Typography";

interface TitleAreaProps {
  id: string;
  status: string;
  // Shoud export buttons to render props for use around entities
}

export const TitleArea = (props: TitleAreaProps) => {
  const { id, status } = props;

  return (
    <TitleAreaContainer>
      {/* BreadCrumbs */}
      <Typography variant="h4" gutterBottom component="div">
        Order {id}
      </Typography>
    </TitleAreaContainer>
  );
};
