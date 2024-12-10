import { EntitySchema } from "typeorm";
import { withBaseSchemaColumns } from "./base.schema";
import { CompanyProductPrice } from "../entity/company-product-price";

export const CompanyProductPriceSchema = new EntitySchema<CompanyProductPrice>({
    name: 'CompanyProductPrice',
    target: CompanyProductPrice,
    columns: withBaseSchemaColumns({
        price: {
            type: "decimal"
        }
    }),
    relations:{
        company:{
            type: "many-to-one",
            target:"Company",
            inverseSide: "companyProductPrice"
        },
        product: {
            type: "many-to-one",
            target: "Product",
            inverseSide: "companyProductPrice"
        }
    }
})