export async function getAllAddress() {
  let response;

  try {
    var token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWZhYjc1YzM2NGQ4M2UyNmQwODJhN2ExIiwiaWF0IjoxNjA2NTY3NTgyLCJleHAiOjE2MDY1Nzc1ODJ9.8chUnAPBm54JlKudgFratoUREhovurLXdPkVjkKlpvw";

    response = await fetch(
      `https://iimca-online-shopping.herokuapp.com/api/user/address/get/all`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    if (response.status == 200) {
      return await response.json();
    } else if (response.status == 400) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else if (response.status == 500) {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
    {
      return response;
    }
  } catch (e) {
    throw e;
  }
}




// image upload

