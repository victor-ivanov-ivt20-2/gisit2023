import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/main";
import "./index.css";
import client from "./graphql";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { store } from "./store";
import { Provider } from "react-redux";

import AuthModal from "./components/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <main>
        <RouterProvider router={router} />
      </main>
      <AuthModal />
    </Provider>
  </ApolloProvider>
);
