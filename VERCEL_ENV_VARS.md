Cole essas variáveis no painel Project Settings → Environment Variables da Vercel.

**Client (NEXT_PUBLIC_)**
- NEXT_PUBLIC_SITE_URL=https://exzosverse.com
- NEXT_PUBLIC_SITE_EMAIL=contact@exzosverse.com
- NEXT_PUBLIC_POSTHOG_API_KEY=phc_exzos_2024_analytics_key
- NEXT_PUBLIC_POSTHOG_HOST=https://posthog.exzosverse.online
- NEXT_PUBLIC_PLAUSIBLE_DOMAIN=exzosverse.com
- NEXT_PUBLIC_PLAUSIBLE_URL=https://plausible.exzosverse.online
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51SW9ImFsI1nxLh5CBrzqZcvE6GTMYXMqWlzrXYOYWw9nhtE8n8Xkvg5qEU7VGL161HiiHypW3z99kXONWcCFOpVa00b1CkRPQS

**Server (sensitive) — marque como Environment: Production / Secret**
- DATABASE_URL=postgresql://exzosverse_user:secure_password@data.exzosverse.online:5432/exzosverse_db
- DATABASE_URL_UNPOOLED=postgresql://exzosverse_user:secure_password@data.exzosverse.online:5432/exzosverse_db
- BETTER_AUTH_URL=https://auth.exzosverse.online
- BETTER_AUTH_SECRET=mhAwYgs6sNVQPZavU0Csu2co3v6yJEGMuckpjJV7wvA=
- AUTH_GOOGLE_ID=your_google_oauth_client_id
- AUTH_GOOGLE_SECRET=your_google_oauth_client_secret
- AUTH_GITHUB_ID=your_github_oauth_app_id
- AUTH_GITHUB_SECRET=your_github_oauth_app_secret
- AUTH_X_ID=your_twitter_oauth_app_id
- AUTH_X_SECRET=your_twitter_oauth_app_secret
- MEILISEARCH_HOST=https://search.exzosverse.online
- MEILISEARCH_ADMIN_KEY=exzos_search_admin_key_2024
- MEILISEARCH_SEARCH_KEY=exzos_search_public_key_2024
- REDIS_REST_URL=https://cache.exzosverse.online
- REDIS_REST_TOKEN=exzos_redis_token_2024_secure
- GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_api_key
- ANTHROPIC_API_KEY=your_anthropic_api_key
- OPENAI_API_KEY=your_openai_api_key
- JINA_API_KEY=your_jina_api_key
- SCREENSHOTONE_ACCESS_KEY=exzos_screenshot_2024_key
- RESEND_API_KEY=your_resend_api_key
- RESEND_SENDER_EMAIL=no-reply@exzosverse.com
- PLAUSIBLE_API_KEY=exzos_plausible_2024_key
- BEEHIIV_API_KEY=exzos_newsletter_2024_key
- BEEHIIV_PUBLICATION_ID=exzosverse_pub_2024
- S3_REGION=us-east-1
- S3_BUCKET=exzosverse-assets
- S3_ACCESS_KEY=your_s3_access_key
- S3_SECRET_ACCESS_KEY=your_s3_secret_access_key
- S3_ENDPOINT=https://cdn.exzosverse.com
- S3_PUBLIC_URL=https://cdn.exzosverse.com
- BLOB_READ_WRITE_TOKEN=your_vercel_blob_read_write_token
- STRIPE_SECRET_KEY=your_stripe_secret_key
- STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
- GITHUB_TOKEN=your_github_personal_access_token
- STACK_ANALYZER_API_URL=https://api.exzosverse.com
- STACK_ANALYZER_API_KEY=exzos_stack_analyzer_2024_key
- TWITTER_API_KEY=your_twitter_api_key
- TWITTER_API_SECRET=tkrAMJnxpm4shFrULl8mliWRdYqZUKEGt7qIibUw0CfVwtlVDK
- TWITTER_ACCESS_TOKEN=1977707995854524416-PFs5G960UYwaxFMBccGbjyo4HeNRpk
- TWITTER_ACCESS_SECRET=CmU3lqxpffMyDhrlSO4pJ4uEbpAS6KCFsfmZvDkRS0gSP
- BLUESKY_USERNAME=@exzosverse.bsky.social
- BLUESKY_PASSWORD=Will3lk5!Exzos@
- MASTODON_ACCESS_TOKEN=exzos_mastodon_2024_token

**Recomendações rápidas**
- Defina `SKIP_ENV_VALIDATION=1` temporariamente em Vercel para permitir build, caso falhe por validação de Zod.
- Garanta `NEXT_PUBLIC_SITE_URL` antes de rodar `next-sitemap` (usado no `postbuild`).
- Marque secrets como "Environment = Production" no painel da Vercel e use os valores sensíveis como "Encrypted".

