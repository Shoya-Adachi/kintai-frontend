import { Box } from "@mui/material";
import KintaiAppbar from "./components/Appbar";
import React from "react";
const KintaiLayout = ({ children }: { children: React.ReactNode }) => {
  const pages = [
    { name: "勤怠入力", path: "home" },
    { name: "勤怠一覧", path: "kintaiList" },
  ];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <KintaiAppbar pages={pages} />
      {children}
    </Box>
  );
};

export default KintaiLayout;
