import { ColorModeContext, useMode } from "./base/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import DashboardStaff from "./StaffViews/scense/dashboard";
import DriverManager from "./StaffViews/scense/drivers";
import AddDriver from "./StaffViews/scense/drivers/addDriver";
import TransactionsManager from "./StaffViews/scense/transactions";
import AddTransactions from "./StaffViews/scense/transactions/addTransactions";
import SuburbManagement from "./StaffViews/scense/suburbs";
import AddSuburb from "./StaffViews/scense/suburbs/AddSuburb";
import ProductTable from "./StaffViews/ProductTable"; // Import the product table component

const ManagerViewsLayout = ({ children }) => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <main className="content">
                        {children}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

const StaffPages = () => (
    <Routes>
        <Route
            path="/"
            element={
                <ManagerViewsLayout>
                    <DashboardStaff />
                </ManagerViewsLayout>
            }
        />
        <Route
            path="/team-manager"
            element={ 
                <ManagerViewsLayout>
                    <DriverManager />
                </ManagerViewsLayout>
            }
        />
        <Route
            path="/add-driver"
            element={
                <ManagerViewsLayout>
                    <AddDriver />
                </ManagerViewsLayout>
            }
        />
        <Route
            path="/transactions-manager"
            element={
                <ManagerViewsLayout>
                    <TransactionsManager />
                </ManagerViewsLayout>
            }
        />
        <Route
            path="/add-transaction"
            element={
                <ManagerViewsLayout>
                    <AddTransactions />
                </ManagerViewsLayout>
            }
        />
        <Route
            path="/suburbs-manager"
            element={
                <ManagerViewsLayout>
                    <SuburbManagement />
                </ManagerViewsLayout>
            }
        />
        <Route
            path="/add-suburb-manager"
            element={
                <ManagerViewsLayout>
                    <AddSuburb />
                </ManagerViewsLayout>
            }
        />
        {/* Add the product management route */}
        <Route
            path="/products-manager"
            element={
                <ManagerViewsLayout>
                    <ProductTable />
                </ManagerViewsLayout>
            }
        />
    </Routes>
);

export default StaffPages;
