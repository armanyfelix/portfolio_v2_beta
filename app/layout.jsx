import "./globals.css";
import Navbar from "./components/layout/Navbar";

export default function Layout({ children }) {
  return (
    <html lang="mx">
      <head />
      <body className="bg-black">
        <div className="mb-11">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}