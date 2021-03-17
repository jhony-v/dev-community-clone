export default function storageObject<T extends object = any>(
  key: string,
  data: T
) {
  const storageJson = localStorage.getItem(key) || "{}";
  localStorage.setItem(
    key,
    JSON.stringify({
      ...JSON.parse(storageJson),
      ...data
    })
  );
}
