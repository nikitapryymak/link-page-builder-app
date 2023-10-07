import { nanoid } from "nanoid";

/**
 * Generates a random character string to use as a link ID.
 * @param {number} size - The length of the ID to generate
 * @returns {string} The link ID
 */
export const id = (size = 6) => nanoid(size);

export const copy = (url) => navigator.clipboard.writeText(url);
