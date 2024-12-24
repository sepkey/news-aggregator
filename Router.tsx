import React from "react";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/id" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
