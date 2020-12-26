function mockApi(url) {
  const data = [
    { text: "Latest Songs", id: "1" },
    { text: "Latest Movies", id: "2" },
    { text: "Latest News 2020", id: "3" },
    { text: "Latest Bollywood Songs 2020", id: "4" }
  ];

  const startingIndex = Math.floor(Math.random() * (data.length / 2));
  const randomLength = Math.floor(
    Math.random() * (data.length - startingIndex) + 1
  );

  const response = data.slice(startingIndex, randomLength);

  return new Promise((res) => {
    setTimeout(() => res(response), 1000);
  });

  // return response;
}

export default mockApi;
