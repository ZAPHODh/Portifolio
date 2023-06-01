'use client';

import { CompletePage } from '@/components/Card';
import { Links, Project } from '@/templates/Project';
import { NextPage } from 'next';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

const RoutePage: NextPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') as string;
  const links: Links = JSON.parse(searchParams.get('links') as string);
  const pageContent: CompletePage[] = JSON.parse(
    searchParams.get('completePage') as string,
  );
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Project title={title} pageContent={pageContent} links={links}></Project>
    </>
  );
};
export default RoutePage;
