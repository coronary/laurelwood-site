import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "njx8vjgn",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});
