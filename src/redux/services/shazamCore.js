const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79d7d9e129mshd6620a6c1575577p1af83ejsn420f01cd6cd3",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: () => {
      headers.set(
        "X-RapidAPI-Key",
        "79d7d9e129mshd6620a6c1575577p1af83ejsn420f01cd6cd3"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
