import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/navbar/navbar.component";
import AppRoutes from "./routes/app.routes";
import { CategoryContextProvider } from "./services/category/category.context";
import { CartContextProvider } from "./services/cart/cart.context";
import AuthenticationContextProvider from "./services/authentication/authentication.context";

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
          <CartContextProvider>
            <AuthenticationContextProvider>
              <Navbar />
              <Box sx={{ height: 64 }} />
              <main>
                <AppRoutes />
              </main>
            </AuthenticationContextProvider>
          </CartContextProvider>
        </CategoryContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
