import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import How from "./Pages/How.jsx";
import RPGuide from "./Pages/RPGuide.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Terms from "./Pages/Terms.jsx";
import CookiesPolicy from "./Pages/CookiesPolicy.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import PrivateAdminRoute from "./Components/PrivateAdminRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="" element={<PrivateAdminRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/joinus" element={<How />} />
      <Route path="/rpguide" element={<RPGuide />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookiesPolicy" element={<CookiesPolicy />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
