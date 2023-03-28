import { Games } from '@/templates/Games';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import Head from 'next/head';

import { games } from '../../utils/games';

const RouteGames = () => {
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
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
