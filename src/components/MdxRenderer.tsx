'use client'; // 이 컴포넌트는 클라이언트 컴포넌트임을 명시합니다.

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ source }: MdxRendererProps) {
  return <MDXRemote {...source} />;
}