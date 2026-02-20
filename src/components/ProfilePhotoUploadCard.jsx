"use client";

import { useId, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { Pencil } from "lucide-react";

export default function AvatarUploadCard({
  size = 320,
  defaultSrc = "/images/user.png",
  cornerBgSrc = "/images/upload-image-corner.png",
  onChange,
}) {
  const inputId = useId();
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Lütfen bir görsel dosyası seçin.");
      e.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);

    e.target.value = "";
  };

  return (
    <Box sx={{ position: "relative", width: size, height: size }}>
      <input
        id={inputId}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />

      <Box
        component="label"
        htmlFor={inputId}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            document.getElementById(inputId)?.click();
          }
        }}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "24px",
          backgroundColor: "#eff1f6",
          border: "2px solid #4361ee",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          userSelect: "none",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={preview || defaultSrc}
          alt="Avatar"
          sx={{
            width: preview ? "100%" : 120,
            height: preview ? "100%" : 120,
            objectFit: preview ? "cover" : "contain",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 90,
            height: 90,
            backgroundImage: `url(${cornerBgSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "top left",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        <IconButton
          component="span"
          onClick={(e) => e.stopPropagation()}
          aria-label="Change avatar"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            width: 42,
            height: 42,
            color: "#fff",
            zIndex: 3,
          }}
        >
          <Pencil size={20} />
        </IconButton>
      </Box>
    </Box>
  );
}
