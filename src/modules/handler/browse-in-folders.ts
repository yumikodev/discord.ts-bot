import { readdir } from "node:fs/promises";
import { join } from "node:path";

export type Callback = (path: string, fileName: string) => unknown;

export async function browseInFolders(path: string, ...handlers: Callback[]) {
  const mainDir = await readdir(path, {
    recursive: false,
    withFileTypes: true,
  });

  for (const archive of mainDir) {
    // If is a folder...
    if (archive.isDirectory()) {
      await browseInFolders(join(path, archive.name), ...handlers);
    }

    // If is a file...
    if (archive.isFile()) {
      for (const cb of handlers) {
        cb(path, archive.name);
      }
    }
  }
}
