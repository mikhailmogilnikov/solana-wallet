import { Skeleton } from '@nextui-org/skeleton';

import { Flex } from '@/src/shared/ui/flex';

export const DashboardSkeleton = () => {
  return (
    <Flex editable className='flex-col md:flex-row gap-4'>
      <Skeleton className='w-full h-[100px] rounded-2xl' />
      <Skeleton className='w-full h-[100px] rounded-2xl' />
    </Flex>
  );
};
