import { SnakeGame } from '@/components/SnakeGame';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';

const Snake = () => {
  return <SnakeGame></SnakeGame>;
};
export default Snake;

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
