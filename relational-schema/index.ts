import { AppDataSource } from "./config/data-source";

export async function main() {
  try {
    AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err) => {
        console.error("Error during Data Source initialization:", err);
      });
  } catch (err) {
    console.log("Error Loggings:", err);
  }
}
main();
