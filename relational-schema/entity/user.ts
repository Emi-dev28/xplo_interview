import { UserStatus } from "../utils/enums/user-status";
import { UserCompanyRole } from "./user-company-role";

export class User {
  email: string;
  password: string;
  status: UserStatus;
  userCompanyRole: UserCompanyRole[];
 

  constructor(email: string, password: string, status: UserStatus) {
    this.email = email;
    this.password = password;
    this.status = status;
  }
}
