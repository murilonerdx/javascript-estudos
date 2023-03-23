import prismaClient from "../../prisma";


interface CategoryRequest{
    name: string;
}
class CreateCategoryService{
    async create({name}: CategoryRequest){
        if(name === ''){
            throw new Error('Nome invalido')
        }

        const category = await prismaClient.category.create({
            data:{
                name: name,
            }
            ,select:{
                id: true,
                name: true,
            }
        })

        return category
    }

    async findAll(){
        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return categories
    }
}

export {CreateCategoryService}