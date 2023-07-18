import React from "react";
import { Button } from "@mui/material";

export default function Amount({ text, isSelected, ...props }) {
  return (
    <React.Fragment>
      {isSelected ? (
        <React.Fragment>
          <Button
            fullWidth
            disableElevation={true}
            style={{
              borderRadius: 100,
              color: "#000",
              backgroundColor: "#F9D3C0",
              border: "3px solid #F9D3C0",
              fontWeight: "400",
              fontSize: 16,
            }}
            variant="contained"
            {...props}
          >
            {text}
          </Button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Button
            fullWidth
            disableElevation={true}
            style={{
              borderRadius: 100,
              color: "#979797",
              backgroundColor: "#ECECEC",
              fontWeight: "300",
              fontSize: 16,
            }}
            variant="contained"
            {...props}
          >
            {text}
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
