export function zipCode(
  e: React.FormEvent<HTMLInputElement>
): React.FormEvent<HTMLInputElement> {
  e.currentTarget.maxLength = 9;
  let { value } = e.currentTarget;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  e.currentTarget.value = value;
  return e;
}
