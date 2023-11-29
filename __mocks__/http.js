export default function fetchData(url) {
  if (url !== 1) {
    return { status: 'bad' };
  } else {
    return { status: 'ok', level: 'high' };
  }
}
