import { NextResponse } from 'next/server';

export async function GET(request: Request, response: NextResponse) {
  console.info('Test Me::POST - called');
  const headers = request.headers;

  return Response.json({
    request_url: request.url,
    'x-middleware-request-url': headers.get('x-middleware-request-url'),
    'x-middleware-request-legacy-url': headers.get('x-middleware-request-legacy-url'),
  });
}
