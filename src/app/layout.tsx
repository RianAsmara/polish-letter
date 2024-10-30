import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PolishLetter | AI Surat Lamaran Kerja",
  description: "Buat surat lamaran kerja dengan mudah",
};

// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-blend-darken font-poppins antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {/* <QueryClientProvider client={queryClient}> */}
          {children}
        {/* </QueryClientProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
