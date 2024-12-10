import { EntitySchema } from "typeorm";
import { Company } from "../entity/company";
import { withBaseSchemaColumns } from "./base.schema";

export const CompanySchema = new EntitySchema<Company>({
  name: "Company",
  target: Company,
  columns: withBaseSchemaColumns({
    name: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    address: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    pIvaNumber: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
    phone: {
      type: "varchar",
      length: 255,
      nullable: false,
    },
  }),
  relations: {
    userCompanyRole: {
      type: "one-to-many",
      target: "UserCompanyRole",
      inverseSide: "company",
    },
    productPrices: {
      type: "one-to-many",
      target: "CompanyProductPrice",
      inverseSide: "company",
    },
  },
});
