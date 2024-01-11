import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <div className="w-full bg-red-500 h-10"></div>

      <div className="flex">
        <nav className="w-[300px] bg-red-400 h-80"></nav>
        <Outlet />
      </div>
    </div>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
        </Route>

        <Route path="/" element={<h1>Dashboard</h1>} />
      </Routes>
    </BrowserRouter>
  )
}