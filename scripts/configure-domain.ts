import fetch from 'node-fetch';

const API_TOKEN = process.env.HOSTINGER_API_TOKEN || 'wB2rsXYKxvbtkgrpFNpNFKNrMqp4wmy9p71PzFLUf76a48f8';
const BASE_URL = 'https://api.hostinger.com/v1';

async function configureDomainForVercel(domain: string) {
  try {
    // Primeiro, verificar se o domínio existe
    const domainResponse = await fetch(`${BASE_URL}/domains/${domain}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!domainResponse.ok) {
      throw new Error(`Domain ${domain} not found or not accessible`);
    }

    // Configurar NS para Vercel
    const nsUpdate = await fetch(`${BASE_URL}/domains/${domain}/nameservers`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nameservers: [
          'ns1.vercel-dns.com',
          'ns2.vercel-dns.com'
        ]
      })
    });

    if (nsUpdate.ok) {
      console.log(`✅ Configured nameservers for ${domain} to point to Vercel`);
    } else {
      console.error(`❌ Failed to configure nameservers: ${nsUpdate.statusText}`);
    }

  } catch (error) {
    console.error('Error configuring domain:', error);
  }
}

// Exemplo de uso
const domain = process.argv[2] || 'exzosverse.com';
configureDomainForVercel(domain);