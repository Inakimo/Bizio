import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";
import { PaymentProvider } from "./PaymentContext";
import "./assets/css/Main.css";
import { AuthProvider } from "./authContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<PaymentProvider>
				<App />
			</PaymentProvider>
		</AuthProvider>
	</React.StrictMode>
);
