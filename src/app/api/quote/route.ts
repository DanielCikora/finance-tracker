export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol");
  const res = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.APP_FINNHUB_API_KEY}`
  );
  const data = await res.json();
  return Response.json(data);
}
