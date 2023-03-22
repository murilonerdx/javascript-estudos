import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'
interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async create({name, email, password}: UserRequest){
        if(!email){
            throw new Error("Email incorreto")
        }
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuario já existe")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password: passwordHash
            }, select:{
                id:true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export {CreateUserService}