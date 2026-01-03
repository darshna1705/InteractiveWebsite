import "./globals.css";

export const metadata = {
  title: "DocAgent",
  description: "Interactive Website - DocAgent landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative text-[#0b0f14] antialiased">
        {/* Background gradient */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f6f8ff]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(34,211,238,0.14),rgba(16,185,129,0.12))] opacity-70" />
          <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-indigo-500/35 blur-[120px]" />
          <div className="absolute top-10 -right-48 h-[650px] w-[650px] rounded-full bg-cyan-400/35 blur-[120px]" />
          <div className="absolute -bottom-48 left-1/3 h-[700px] w-[700px] rounded-full bg-emerald-400/28 blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
        </div>

        {children}
      </body>
    </html>
  );
}
