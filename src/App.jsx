import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider, AuthProvider } from "./provider";

function App() {
  const router = routes;
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
