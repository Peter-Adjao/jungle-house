

export const metadata = {
  title: "Jungle House",
  description: "An Ecommerce website for selling plats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}