import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import { GuessedWordRound } from '@/components/GuessedWordRound';

export const Wordle = () => {
  return (
    <GuessedWordRound
      word={[
        'SAGAZ',
        'AMAGO',
        'NEGRO',
        'MEXER',
        'TERMO',
        'NOBRE',
        'ETICA',
        'SUTIL',
        'FAZER',
        'VIGOR',
        'AFETO',
        'POREM',
        'AUDAZ',
        'IDEIA',
        'RAZAO',
        'MUITO',
        'ETNIA',
      ]}
    ></GuessedWordRound>
  );
};
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
