import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  pages: {
    name: string;
    path: string;
  }[];
};

const KintaiAppbar = ({ pages }: Props) => {
  const navigate = useNavigate();

  const clickHandler = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "30px" }}>
      <Container>
        <Toolbar>
          <Typography variant="h4" sx={{ fontWeight: "800" }}>
            Kintai
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "50px",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => clickHandler(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default KintaiAppbar;
