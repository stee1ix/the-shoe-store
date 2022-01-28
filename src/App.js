import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar/navbar.component";
import RoutesOperator from "./routes/routes.operator";

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
        <Navbar />
        <Box sx={{ height: 64 }} />
        <main>
          <RoutesOperator />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
