import { Windmill } from "@windmill/react-ui";
import { UserProvider } from "context/UserContext";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { JobProvider } from "context/JobContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <HelmetProvider>
        <Windmill>
            <UserProvider>
                <JobProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </JobProvider>
            </UserProvider>
        </Windmill>
    </HelmetProvider>
);
