export type ValidationRules<T> = {
  [K in keyof T]?: (value: any) => string | null;
};

export function validateForm<T>(
  formData: T,
  rules: ValidationRules<T>
): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const key in rules) {
    const rule = rules[key];
    if (!rule) continue;

    const errorMessage = rule(formData[key]);
    if (errorMessage) errors[key] = errorMessage;
  }

  return errors;
}

export const validators = {
  required:
    (label: string) =>
    (value: any): string | null =>
      !value ? `${label} is required` : null,
};
