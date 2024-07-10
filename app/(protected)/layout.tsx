'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { useWallet } from '@/src/entities/wallet';

type Props = { children: ReactNode };

export default function ProtectedLayout({ children }: Props) {
  const { wallet } = useWallet();
  const { push } = useRouter();

  if (!wallet && typeof wallet !== 'undefined') {
    push('/');
  }

  return children;
}
