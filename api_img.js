const axios = require('axios');


const generateCuteCreature = async (text) => {
  try {
    const response = await axios.post(
      'https://api.deepai.org/api/cute-creature-generator',
      new URLSearchParams({
        text: text, // The text input for the creature
        image_generator_version: 'hd',
        use_old_model: 'false',
        turbo: 'true',
        genius_preference: 'classic',
      }),
      {
        headers: {
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
          'api-key': 'tryit-5544059029-26b7955f22df836e9709e6dc780c6381',
          'content-type': 'application/x-www-form-urlencoded',
        },
      }
    );
return response.data; // Return the API response
    console.log(response.data); // Handle the API response here
  } catch (error) {
    console.error('Error generating cute creature:', error);
  }
};

// Call the function

module.exports = { generateCuteCreature };