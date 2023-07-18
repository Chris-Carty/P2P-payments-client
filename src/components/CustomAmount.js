import React from "react";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function CustomAmount({ text, hideButton, state, ...props }) {
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
      {hideButton ? (
        <div />
      ) : (
        <Button
          variant="text"
          fullWidth
          id="verify"
          disableElevation={true}
          style={{
            fontWeight: 300,
            color: "#808080",
            textDecoration: "underline",
          }}
          {...props}
        >
          {text}
        </Button>
      )}
    </ThemeProvider>
  );
}
