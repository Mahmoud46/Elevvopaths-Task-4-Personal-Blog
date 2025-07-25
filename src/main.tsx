import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/ContextProvider.tsx";

// Remove splash after React is ready
const splash = document.getElementById("splash");
if (splash) splash.remove();

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
	</BrowserRouter>
);
