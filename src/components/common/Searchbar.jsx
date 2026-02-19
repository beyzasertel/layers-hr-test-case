import { useState } from "react";

import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar({
  placeholder = "İş ara | İş, Şirket, Anahtar Kelime",
  onSearch,
  fullWidth = true,
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value.trim());
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        fullWidth={fullWidth}
        size="medium"
        variant="outlined"
        sx={{
          bgcolor: "white",
          borderRadius: "999px",

          "& fieldset": {
            border: "none",
          },

          "&:hover fieldset": {
            border: "none",
          },

          "&.Mui-focused fieldset": {
            border: "none",
          },

          "& .MuiOutlinedInput-root": {
            borderRadius: "999px",
            paddingRight: "12px",
            width: {
              xs: 250,
              md: 350,
            },
            height: { xs: 40, md: 50 },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="disabled" />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
