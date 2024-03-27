import { Button } from "@mui/material";

type Props = {
  type?: "primary" | "secondary";
  width?: string;
  height?: string;
  color?: string;
  content?: string;
  noRadius?: boolean;
};

const ActionButton = ({
  type,
  width,
  height,
  color,
  content,
  noRadius,
}: Props) => {
  return (
    <Button
      sx={{
        backgroundColor: type === "primary" ? "primary.main" : "secondary.main",
        width: width ? width : "224px",
        height: height ? height : "53px",
        color: color ? color : "#fff",
        fontWeight: 400,
        boxShadow: "none",
        letterSpacing: "2px",
        borderRadius: noRadius ? "0px" : "4px",
        fontSize: 13.5,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "secondary.main",
        },
      }}
    >
      {content}
    </Button>
  );
};

export default ActionButton;
