import {  EntitySchema } from "typeorm";
import { User } from "../entity/user";
import { withBaseSchemaColumns } from "./base.schema";

export const UserSchemaColumns = new EntitySchema<User>({
    name: 'User',
    target: User,
    tableName: 'User',
    columns: withBaseSchemaColumns({
        email: {
            type: 'varchar',
            length: 255,
            nullable: false,
            unique: true
        },
        password: {
            type: 'varchar',
            length: 255,
            nullable: false
        },
        status: {
            type: 'varchar',
            length: 255,
            nullable: false,
            default: 'Attivo'
        },
    }),
    relations: {
        userCompanyRole: {
            type: 'one-to-many',
            target: 'UserCompanyRole',
            inverseSide: "user"
        }
    }
})