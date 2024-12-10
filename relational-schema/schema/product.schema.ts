import { EntitySchema } from "typeorm";
import { withBaseSchemaColumns } from "./base.schema";
import { Product } from "../entity/product";

export const ProductSchema = new EntitySchema({
    name: 'Product',
    target: Product,
    columns: withBaseSchemaColumns({
        code: {
            type: 'varchar',
            length: 255,
            nullable: false,
            unique: true
        },
        description: {
            type: 'varchar',
            length: 255,
            nullable: false
        },
        image: {
            type: 'varchar',
            length: 255,
            nullable: false
        },
        price: {
            type: 'integer',
            nullable: false
        },
    }),
    relations: {
        companyProductPrice: {
            type: 'one-to-many',
            target: 'CompanyProductPrice',
            inverseSide: "product"
        }
    }
})