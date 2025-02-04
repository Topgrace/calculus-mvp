import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function CalculusLayout({ children }: LayoutProps) {
  return (
    <div className="p-4 font-sans">
      <header className="mb-4">
        <nav className="flex gap-4">
          <Link href="/calculus" className="text-blue-600 hover:underline">홈</Link>
          <Link href="/calculus/overview" className="text-blue-600 hover:underline">개요</Link>
          <Link href="/calculus/examples" className="text-blue-600 hover:underline">예제</Link>
          <Link href="/calculus/exercises" className="text-blue-600 hover:underline">연습문제</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
