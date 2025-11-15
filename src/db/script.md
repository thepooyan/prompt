import { db } from ".";
import { authorsTable } from "./schema";

await db.insert(authorsTable).values({
  name: "پیمان کلانتری",
})
