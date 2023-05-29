import Header from '@/components/header.component'
import './globals.css'
import { ProductContextProvider } from "../context/product.context";

export const metadata = {
  title: 'Ecommerc',
  description: 'Test ecommerc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ProductContextProvider>
        <body className={'w-full h-full flex flex-col justify-center items-center'}>
          <Header/>
          {children}
        </body>
      </ProductContextProvider>
    </html>
  )
}
