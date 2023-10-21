
import toxicCheck from "@/lib/toxicCheck"

export async function POST(request: Request){

  const data = await request.json()

  const isToxic = await toxicCheck(data.content)

  return Response.json({"response":isToxic})
}