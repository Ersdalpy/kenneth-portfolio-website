// src/app/layout.tsx
import "./globals.css";
import NavBar from "./navBar";
import ChatbotButton from "./chatbotButton";
import React from "react";

export const metadata = {
  title: "Next.js Minimal Dark Mode",
  description: "Showcasing a sticky navbar, dark mode, and a carousel with animations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We'll set data-theme on the <html> based on localStorage or default
  // For simplicity, we do a quick client-side script. 
  // Alternatively, you could manage this with Next.js's new Theme features or context.

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen">
        {/* Sticky Navbar */}
        <NavBar />
        {/* Main content */}
        <div>{children}</div>
        {/* Placeholder chatbot button */}
        <ChatbotButton />
        {/* Script to read localStorage and set dark mode on first load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const darkMode = localStorage.getItem('darkMode');
              if (darkMode === 'true') {
                document.documentElement.setAttribute('data-theme','dark');
              }
            })();
          `,
          }}
        />
      </body>
    </html>
  );
}
