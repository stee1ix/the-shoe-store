import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar/navbar.component";
import RoutesOperator from "./routes/routes.operator";
import { FilterContextProvider } from "./services/filter/filter.context";

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
        <FilterContextProvider>
          <Navbar />
          <Box sx={{ height: 64 }} />
          <main>
            <RoutesOperator />
          </main>
        </FilterContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
