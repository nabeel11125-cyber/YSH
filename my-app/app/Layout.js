import "./globals.css";

export const metadata = {
  title: "YSH - SOlutions – Sada Grow Karo",
  description: "Startup & MSME Solutions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}