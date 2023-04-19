import prisma from "../../prisma";
import prismaClient from "../../prisma";

interface ProductRequest{
    name : string
    price       : string
    description :string
    banner      :string
    category_id :string
}
class ProductService{

    async create({name, price, description, banner, category_id}: ProductRequest){
        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })

        return product;
    }

    async findAll(){
        const products = await prismaClient.product.findMany()

        return products
    }

    async findAllByCategoryId(category_id: string){
        const findByCategory = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return findByCategory;
    }

}

export {ProductService}