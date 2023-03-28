import { Games } from '@/templates/Games';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { games } from '../../utils/games';

const RouteGames = () => {
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [router, status]);

  return (
    <>
      <Head>
        <title>Jogos</title>
      </Head>
      <Games games={games} />
    </>
  );
};
export default RouteGames;
