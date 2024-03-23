export const searchDictionary = async (query: string) => {
  const queryLowercase = query.trim().toLowerCase();
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${queryLowercase}`);
  const data = await response.json();
  return data;
}