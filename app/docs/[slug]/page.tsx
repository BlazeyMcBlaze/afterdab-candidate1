import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import DocsLayout from '@/components/DocsLayout';

// Define the type for the params
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  // 1. Await the params promise to extract the slug
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Debugging: verify what we got
  console.log("DEBUG: Slug received is:", slug);

  if (!slug) {
    notFound();
  }

  // 2. Construct the path
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  // 3. Check file existence
  if (!fs.existsSync(filePath)) {
    console.log("DEBUG: File not found at:", filePath);
    notFound();
  }

  // 4. Read content
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return <DocsLayout content={fileContent} />;
}