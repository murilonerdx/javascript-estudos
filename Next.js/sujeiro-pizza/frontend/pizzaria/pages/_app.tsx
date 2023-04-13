import '../styles/home.module.scss'
import '../styles/global.scss'
import type {AppProps} from 'next/app'
import {AuthProvider} from "../context/AuthContext";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Header} from "../components/ui/Header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
            <ToastContainer autoClose={3000}/>
        </AuthProvider>
    )
}
