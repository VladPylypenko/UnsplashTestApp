const accessKey =
  'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
const apiBase = 'https://api.unsplash.com/';
export const URL = `${apiBase}photos/random?client_id=${accessKey}&count=10`;

export async function service() {
  const response = await fetch(URL);
  if (response.ok) {
    const photos = await response.json();
    return photos;
  }
  throw new Error('ERROR', response.status);
}
