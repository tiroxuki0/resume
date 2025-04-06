import clsx from 'clsx';

import Reactions from '@/components/Reactions';

import type { ReactionsProps } from '@/components/Reactions';

function WithReactionsFixed(props: ReactionsProps) {
  return (
    <div
      className={clsx(
        'pointer-events-none fixed bottom-8 right-8 z-[902]',
        'lg:bottom-8',
        'w-[360px] px-4',
        'sm:w-[420px] sm:px-0'
      )}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Reactions {...props} />
    </div>
  );
}

export default WithReactionsFixed;
