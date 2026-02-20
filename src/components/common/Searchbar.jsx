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
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        fullWidth={fullWidth}
        size="medium"
        variant="outlined"
        sx={{
          width: "100%", // ✅ TextField root da genişlesin

          "& .MuiOutlinedInput-root": {
            width: "100%",
            height: { xs: 40, md: 50 },
            borderRadius: "999px",
            paddingRight: "12px",
            backgroundColor: "#fff", // ✅ beyazı input'a ver

            // ✅ doğru border hedefi
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4361ee",
              borderWidth: "1.5px",
            },

            // hover/focus değişmesin (kilitle)
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4361ee",
              borderWidth: "1.5px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4361ee",
              borderWidth: "1.5px",
            },
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9ca3af" }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}
