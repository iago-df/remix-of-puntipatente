import type { VercelRequest, VercelResponse } from "@vercel/node";

const BASE_URL = "https://license-checker-947446594444.europe-west1.run.app";
const API_KEY = process.env.LICENCE_API_KEY ?? "test-1234";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { action, licence, dob, jobId } = req.body ?? {};

  try {
    if (action === "start") {
      const url = `${BASE_URL}/start/${encodeURIComponent(licence)}/${encodeURIComponent(dob)}`;
      const response = await fetch(url, {
        headers: { "X-API-Key": API_KEY },
      });
      const text = await response.text();
      console.log("API response start:", text);
      try {
        return res.status(response.status).json(JSON.parse(text));
      } catch {
        return res.status(500).json({ error: "API returned non-JSON", body: text });
      }
    }

    if (action === "transcript") {
      const url = `${BASE_URL}/transcripts/${encodeURIComponent(jobId)}`;
      const response = await fetch(url, {
        headers: { "X-API-Key": API_KEY },
      });
      if (response.status === 404) {
        return res.status(404).json({ status: "pending" });
      }
      const text = await response.text();
      console.log("API response transcript:", text);
      try {
        return res.status(response.status).json(JSON.parse(text));
      } catch {
        return res.status(500).json({ error: "API returned non-JSON", body: text });
      }
    }

    return res.status(400).json({ error: "Invalid action" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
}