// src/utils/fetchData.js
export async function fetchProductData() {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}data.json`); // ✅ safer for local + production
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('❌ Failed to fetch product data:', error);
      throw error;
    }
  }  