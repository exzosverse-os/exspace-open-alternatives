import fetch from 'node-fetch';

async function testAPI() {
  try {
    const res = await fetch('https://api.hostinger.com/v1/domains', {
      headers: {
        'Authorization': 'Bearer wB2rsXYKxvbtkgrpFNpNFKNrMqp4wmy9p71PzFLUf76a48f8'
      }
    });
    console.log('Status:', res.status);
    if (res.ok) {
      const data = await res.json();
      console.log('Domains:', data);
    } else {
      console.log('Error:', res.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testAPI();