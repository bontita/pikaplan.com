/**
 * Combine classnames using clsx pattern
 * Useful for conditional Tailwind classes
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes
    .filter((cls) => typeof cls === 'string' && cls.length > 0)
    .join(' ');
};
