import MuiButton from "@mui/material/Button";

export default function Button({
  variant = "primary",
  disabled = false,
  loading = false,
  children,
  ...props
}) {
  return (
    <MuiButton
      variant="text"
      disableRipple
      className={`custom-btn custom-btn--${variant}`}
      sx={{
        height: { xs: 30, md: 50 },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}
