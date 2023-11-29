import fetchData from './__mocks__/http';

export default function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);

  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  } else {
    return 'Информация об уровне временно недоступна';
  }
}
