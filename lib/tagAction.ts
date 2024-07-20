// lib/tags/tagManager.ts

import fs from "fs/promises";
import path from "path";

export interface Tag {
  name: string;
}

const tagsFilePath = path.join(process.cwd(), "data", "tags.txt");

export async function getAllTags(): Promise<Tag[]> {
  try {
    const fileContent = await fs.readFile(tagsFilePath, "utf-8");
    const tags = fileContent
      .split("\n")
      .filter(Boolean)
      .map((name) => ({ name: name.trim() }));
    return tags;
  } catch (error) {
    console.error("Error reading tags file:", error);
    return [];
  }
}

export async function addTag(tagName: string): Promise<void> {
  try {
    const tags = await getAllTags();
    if (!tags.some((tag) => tag.name === tagName)) {
      await fs.appendFile(tagsFilePath, `\n${tagName}`);
    }
  } catch (error) {
    console.error("Error adding tag:", error);
  }
}

export async function removeTag(tagName: string): Promise<void> {
  try {
    const tags = await getAllTags();
    const updatedTags = tags.filter((tag) => tag.name !== tagName);
    await fs.writeFile(
      tagsFilePath,
      updatedTags.map((tag) => tag.name).join("\n")
    );
  } catch (error) {
    console.error("Error removing tag:", error);
  }
}

export async function validateTags(tagNames: string[]): Promise<string[]> {
  const allTags = await getAllTags();
  return tagNames.filter((tag) => allTags.some((t) => t.name === tag));
}
