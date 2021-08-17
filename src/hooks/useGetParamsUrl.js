export function useGetParamsUrl() {
  let params = new URL(document.location).searchParams;
  const query = params.get("q");

  return query;
}
