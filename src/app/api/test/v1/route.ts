import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.info('Test Me::POST - called');
  const headers = request.headers;

  return Response.json({
    envs: process.env,
    request_url: request.url,
    next_request_url: request.nextUrl.href,
    'x-middleware-request-url': headers.get('x-middleware-request-url'),
    'x-middleware-request-legacy-url': headers.get('x-middleware-request-legacy-url'),
  });
}
