import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeapFWD Program",
  description: "Apply on the LeapFWD Program",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
