import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import "reflect-metadata";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: ["**/*.schema.ts"],
  namingStrategy: new SnakeNamingStrategy(),
});