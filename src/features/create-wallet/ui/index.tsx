import { Button } from '@nextui-org/button';
import { Plus, Wallet } from '@phosphor-icons/react';

import { createWallet, getBalance, useWallet } from '@/src/entities/wallet';

export const CreateWalletButton = () => {
  const { setBalance, setWallet } = useWallet();

  const handleCreateWallet = async () => {
    const newWallet = createWallet();

    setWallet(newWallet);
    setBalance(await getBalance(newWallet.publicKey));
    localStorage.setItem('wallet', JSON.stringify(newWallet));
  };

  return (
    <Button className='min-w-4' onPress={handleCreateWallet}>
      <Plus opacity={0.5} size={14} weight='bold' />
      <Wallet size={20} weight='bold' />
    </Button>
  );
};
