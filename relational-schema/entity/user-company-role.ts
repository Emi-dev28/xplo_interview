import { Company } from "./company";
import { User } from "./user";
import { UserCompanyRole as UserRole } from "../utils/enums/user-company-role";

export class UserCompanyRole {
  role: UserRole;
  user: User;
  company: Company;

  constructor(role: UserRole, user: User, company: Company) {
    this.role = role;
    this.user = user;
    this.company = company;
  }
}
