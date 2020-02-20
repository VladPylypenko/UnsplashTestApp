const accessKey =
  '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const apiBase = 'https://api.unsplash.com/';
const count = 15;
const interests = 'sportscar';
export const URL = `${apiBase}photos/random?client_id=${accessKey}&count=${count}&query=${interests}`;

export async function service() {
  const response = await fetch(URL);
  if (response.ok) {
    const photos = await response.json();
    return photos;
  }
  throw new Error('ERROR', response.status);
}
