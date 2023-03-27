import { Games } from '@/templates/Games';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { games } from '../../utils/games';

const RouteGames = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, []);
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
