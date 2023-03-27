import prisma from "../../prisma";
import prismaClient from "../../prisma";

interface ProductRequest{
    name : string
    price       :string
    description :string
    banner      :string
    category_id :string
}
class ProductService{

    async create({name, price, description, banner, category_id}: ProductRequest){
        if(name === ''){
            throw new Error('Nome invalido')
        }

        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                banner: banner,
                description: description,
                category_id: category_id,
            }
        })

        return product
    }

    async findAll(){
        const products = await prismaClient.product.findMany()

        return products
    }

}

export {ProductService}