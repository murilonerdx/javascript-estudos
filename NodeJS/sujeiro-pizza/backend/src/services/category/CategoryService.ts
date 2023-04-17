import prismaClient from "../../prisma";


interface CategoryRequest {
    name: string;
}

class CategoryService {
    async create({name}: CategoryRequest) {
        if (name === '') {
            throw new Error('Nome invalido')
        }

        const foundCategory = await prismaClient.category.findFirst(
            {
                where: {
                    name: name
                }
            }
        )
        if (foundCategory != null) {
            throw new Error('Categoria já existe')
        }

        const category = await prismaClient.category.create({
            data: {
                name: name,
            }
            , select: {
                id: true,
                name: true,
            }
        })

        return category
    }

    async deleteById({id}) {
        return prismaClient.category.delete({
            where: {
                id: id
            }, select: {
                name: true
            }
        });
    }

    async findAll() {
        const categories = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return categories
    }
}

export {CategoryService}