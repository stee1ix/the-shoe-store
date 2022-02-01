import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar/navbar.component";
import AppRoutes from "./routes/app.routes";
import { CategoryContextProvider } from "./services/category/category.context";

const theme = createTheme({
  palette: {
    primary: {
      main: "#43a047",
    },
    secondary: {
      main: "#00c853",
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <CategoryContextProvider>
          <Navbar />
          <Box sx={{ height: 64 }} />
          <main>
            <AppRoutes />
          </main>
        </CategoryContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
