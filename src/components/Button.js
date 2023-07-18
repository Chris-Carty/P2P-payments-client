import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function FormButton({ buttonText, state, ...props }) {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
      fontFamily: ["DM Sans"].join(","),
      fontSize: 16,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        fullWidth
        id="verify"
        disableElevation={true}
        style={{
          borderRadius: 100,
          color: "#000",
          backgroundColor: "#F9D3C0",
        }}
        variant="contained"
        {...props}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
}
