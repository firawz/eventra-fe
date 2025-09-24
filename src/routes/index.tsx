import { createBrowserRouter } from "react-router-dom";
import landingRoutes from "./landingRoutes";
import adminRoutes from "./adminRoutes";

const router = createBrowserRouter([...landingRoutes, ...adminRoutes]);

export default router;
