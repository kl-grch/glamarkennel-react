import { redirect } from "next/navigation";

export async function GET(request) {
  redirect("/results/2021");
}
