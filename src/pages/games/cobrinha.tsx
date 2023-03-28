import { SnakeGame } from '@/components/SnakeGame';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// export type SnakeProps = {
//   title?: string;
// };

const Snake = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session]);
  return <SnakeGame></SnakeGame>;
};
export default Snake;
