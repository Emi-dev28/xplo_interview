import { EntitySchema } from "typeorm";
import { withBaseSchemaColumns } from "./base.schema";
import { UserCompanyRole } from "../entity/user-company-role";
import { UserCompanyRole as UserRole } from "../utils/enums/user-company-role";

export const UserCompanyRoleSchema = new EntitySchema<UserCompanyRole>({
  name: "UserCompanyRole",
  target: UserCompanyRole,
  tableName: "user_company_role",
  columns: withBaseSchemaColumns({
    role: {
      type: "enum",
      enum: UserRole,
    },
  }),
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
      inverseSide: "userCompanyRole",
    },
    company: {
      type: "many-to-one",
      target: "Company",
      inverseSide: "userCompanyRole",
    },
  },
});
