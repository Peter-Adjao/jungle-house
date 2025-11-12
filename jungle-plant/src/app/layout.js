import "../styles/globals.css";
import "@/styles/Layout.css";


export const metadata = {
    title: "Jungle House",
    descriptiton: "An ecommerce app to for all plants"
};

export default function RootLayout({ children}) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>

        </html>
    )
}