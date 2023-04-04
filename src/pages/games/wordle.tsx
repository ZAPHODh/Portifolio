import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import { GuessedWordRound } from '@/components/GuessedWordRound';

const Wordle = () => {
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
        'XIBIU',
        'DENSO',
        'VULGO',
        'IMPOR',
        'JEITO',
        'CRIAR',
        'LOUCO',
        'PROLE',
        'DEVER',
        'FALSO',
        'CISMA',
        'AFINS',
        'GERAR',
        'OBTER',
        'CRISE',
        'TEDIO',
        'ABRIR',
        'BRAVO',
        'ALIBI',
        'MORTE',
        'TECER',
        'FALTA',
        'AJUDA',
        'NOITE',
        'SABER',
        'VIVER',
        'FATOR',
        'POBRE',
        'SONSO',
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
export default Wordle;
