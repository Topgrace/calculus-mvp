export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import MdxRenderer from '../../../components/MdxRenderer'; // 경로는 프로젝트 구조에 맞게 조정

// 이 페이지 컴포넌트는 서버 컴포넌트로 동작합니다.
export default async function OverviewPage() {
  // 'src/content/calculus/overview.mdx' 파일을 읽어옵니다.
  const filePath = path.join(process.cwd(), 'src', 'content', 'calculus', 'overview.mdx');
  const source = await fs.readFile(filePath, 'utf-8');
  
  // MDX 콘텐츠를 serialize 합니다.
  const mdxSource = await serialize(source, { scope: {} });

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>미적분 개요</h2>
      {/* 클라이언트 컴포넌트인 MdxRenderer를 사용하여 MDXRemote를 호출합니다. */}
      <MdxRenderer source={mdxSource} />
    </div>
  );
}