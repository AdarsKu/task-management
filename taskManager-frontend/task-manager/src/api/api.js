const BASE_URL = "http://localhost:8080";

/**
 * A utility function to handle API calls.
 * @param {string} endpoint - The API endpoint (e.g., '/tasks', '/users').
 * @param {string} method - The HTTP method (GET, POST, PUT, DELETE).
 * @param {object} [body] - The request body for POST/PUT requests.
 * @returns {Promise<any>} - The JSON response or an error.
 */
export const apiCall = async (endpoint, method = "GET", body = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const options = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    return await response.json();
  } catch (error) {
    console.error("API call failed:", error.message);
    throw error;
  }
};
