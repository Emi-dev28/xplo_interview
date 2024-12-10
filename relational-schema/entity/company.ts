import { CompanyProductPrice } from "./company-product-price";
import { User } from "./user";
import { UserCompanyRole } from "./user-company-role";

export class Company {
    name: string
    address: string
    pIvaNumber: string
    phone: string;
    users: User[];
    userCompanyRole: UserCompanyRole[];
    productPrices: CompanyProductPrice[];

    constructor(name: string, address: string, pIvaNumber: string, phone: string) {
        this.name = name;
        this.address = address;
        this.pIvaNumber = pIvaNumber;
        this.phone = phone;
        this.users = [];
    }
}