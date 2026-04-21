import React from 'react';
import ReactMarkdown from 'react-markdown';

interface DocsLayoutProps {
  content: string;
}

export default function DocsLayout({ content }: DocsLayoutProps) {
  return (
    // We add a 'flex-grow' div to push the footer down if you have one later
    <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-invert prose-slate max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}