import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import Login from "./components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Browse } from "./components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
