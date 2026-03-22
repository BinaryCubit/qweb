import { createClient } from "next-sanity";

export const client = createClient({
  projectId: 'rno46pa1',
  dataset: "production",
  useCdn: false,
});