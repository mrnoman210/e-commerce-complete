import fs from "node:fs"

export function readFileSync(filePath) {
    try {
      const data = fs.readFileSync(filePath,{ encoding: 'utf8' });
      return data;
    } catch (err) {
      // Handle the error if the file couldn't be read
      console.error('Error reading file:', err);
      return null;
    }
  }
  
  