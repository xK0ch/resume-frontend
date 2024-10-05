export function neitherNullNorUndefined<T>(input: T): input is NonNullable<T> {
  return input != null;
}
