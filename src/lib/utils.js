import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/** @param {import("clsx").ClassValue[]} classes
 * @returns {string}
 */
export const cn = (...classes) => {
	return twMerge(clsx(classes));
};
