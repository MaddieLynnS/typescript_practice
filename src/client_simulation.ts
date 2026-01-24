// client.ts
// Simulates an external client calling the CRUD API

const BASE_URL = "http://localhost:3000/students";

// Helper function for logging
async function logResponse(label: string, response: Response) {
  const data = await response.json();
  console.log(`\n=== ${label} ===`);
  console.log("Status:", response.status);
  console.log("Response:", data);
}

async function runClient() {
  try {
    // CREATE
    const createResponse = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Alice",
        age: 20,
        isEnrolled: true,
      }),
    });

    await logResponse("CREATE STUDENT", createResponse);

    // READ
    const readResponse = await fetch(`${BASE_URL}/Alice`, {
      method: "GET",
    });

    await logResponse("READ STUDENT", readResponse);

    // UPDATE
    const updateResponse = await fetch(`${BASE_URL}/Alice`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Alice",
        isEnrolled: false,
      }),
    });

    await logResponse("UPDATE STUDENT", updateResponse);

    // DELETE
    const deleteResponse = await fetch(`${BASE_URL}/Alice`, {
      method: "DELETE",
    });

    await logResponse("DELETE STUDENT", deleteResponse);

  } catch (error) {
    console.error("Client error:", error);
  }
}

runClient();