"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Users from "./pages/Users"
import Reports from "./pages/Reports"
import Content from "./pages/Content"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  )
}
