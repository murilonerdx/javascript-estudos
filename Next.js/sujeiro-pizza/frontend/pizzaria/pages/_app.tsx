import '@/styles/home.module.scss'
import '../styles/global.scss'
import type { AppProps } from 'next/app'
import {AuthProvider} from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  )
}
