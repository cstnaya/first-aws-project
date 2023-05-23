export const handler = async (event) => {
  // 1. calculate a random number
  const raiseCatsNum = Math.round((Math.random() * 5000 + 300) / 10) * 10; // [300, 5300]

  // 2. return the number
  const response = {
    statusCode: 200,
    body: JSON.stringify({ raiseCatsNum }),
  };
  return response;
};
