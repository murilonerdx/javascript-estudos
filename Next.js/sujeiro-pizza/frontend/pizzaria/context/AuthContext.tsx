import {createContext, ReactNode, useEffect, useState} from 'react';

import {api} from '../services/apiClient';

import {destroyCookie, setCookie, parseCookies} from 'nookies'
import Router from 'next/router';
import {AuthTokenError} from "../services/errors/AuthTokenError";
import {toast} from "react-toastify";


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string;
    name: string;
    email: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string
}

export const AuthContext = createContext({} as AuthContextData)


export async function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token')
        await Router.push('/')
    } catch {
        toast.error("Erro ao tentar deslogar")
    }
}

export function AuthProvider({children}: AuthProviderProps) {
    useEffect(() => {
        const {'@nextauth.token': token} = parseCookies()

        if(token){
            api.get("/me").then(response => {
                const {id, name, email} = response.data
                setUser({
                    id, name, email
                })
            })
                .catch(() => {
                    signOut();
                })
        }
    }, [])


    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    async function signIn({email, password}: SignInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            })

            const {id, name, token} = response.data;

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            })

            setUser({
                id,
                name,
                email,
            })

            //Passar para proximas requisiçoes o nosso token
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success("Logado com sucesso!")
            //Redirecionar o user para /dashboard
            await Router.push('/dashboard')


        } catch (err) {
            toast.error(`Erro encontrado ${err}`)
        }
    }

    async function signUp({name, email, password}: SignUpProps) {
        try {
            if (email.toLowerCase()
                .match(
                    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
                )) {
                const response = await api.post('/users', {
                    name,
                    email,
                    password,
                })

                toast.success("Conta criada com sucesso!")
                console.log(response)
                await Router.push('/')
            }
        } catch (e) {
            toast.error(`Erro encontrado ${e}`)
            return Promise.reject(new AuthTokenError())
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}