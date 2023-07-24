import { readUserFile } from "./readUserFile";
import fs from "node:fs"
import path from "path";
const filePath = path.join(process.cwd(), "data", "users.json");

export function saveUser(id, userName, userEmail, userPassword) {
  const userData = readUserFile()
  userData.push({ id, userName, userEmail, userPassword });

  fs.writeFileSync(filePath, JSON.stringify(userData));
}