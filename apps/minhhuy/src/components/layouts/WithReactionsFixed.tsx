import clsx from 'clsx';

import Reactions from '@/components/Reactions';

import type { ReactionsProps } from '@/components/Reactions';

function WithReactionsFixed(props: ReactionsProps) {
  return (
    <div
      className={clsx(
        'fixed bottom-8 right-8 z-[902] max-md:bottom-[10px] max-md:right-[10px]',
        'lg:bottom-8',
        'w-[360px]',
        'sm:w-[420px] sm:px-0'
      )}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Reactions {...props} />
    </div>
  );
}

export default WithReactionsFixed;
