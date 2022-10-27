import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Create() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    > 
      <TextField id="standard-basic" label="Id" variant="standard" />
      <TextField id="standard-basic" label="Title" variant="standard" />
      <TextField id="standard-basic" label="Author" variant="standard" />
      <TextField id="standard-basic" label="Body" variant="standard" />
    </Box>
  );
}
