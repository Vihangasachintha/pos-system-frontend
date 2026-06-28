import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ProductsPage from "../pages/ProductsPage";
import SalesPage from '../pages/SalesPage';
import StockPage from '../pages/StockMovements';
import SuppliersPage from '../pages/SupplyPage';
import ExpensesPage from '../pages/ExpensePage';

// Wrapper that blocks unauthenticated users
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

// Wrapper that redirects logged-in users away from login page
function GuestRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/dashboard" replace />
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <SalesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stocks"
          element={
            <ProtectedRoute>
              <StockPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/suppliers"
          element={
            <ProtectedRoute>
              < SuppliersPage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              < ExpensesPage/>
            </ProtectedRoute>
          }
        />
        Step 2 — Create placeholder page files
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
