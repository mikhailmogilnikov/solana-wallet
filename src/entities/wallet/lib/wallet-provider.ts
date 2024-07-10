import { ReactNode } from 'react';

import { useSetupWallet } from './use-setup-wallet';

type Props = {
  children: ReactNode;
};

export const WalletProvider = ({ children }: Props) => {
  useSetupWallet();

  return children;
};
