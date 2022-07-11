import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const StyledToolbar = styled(Toolbar)`
  padding: 0 30px 0 30px;
  height: 50px;
  min-height: 50px !important;
`;

export const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar disableGutters>Reeco</StyledToolbar>
    </AppBar>
  );
};
