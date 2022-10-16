import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            className={clsx
                ('py-3 px-6 bg-green-500 rounded-md font-semibold font-sans text-gray-100 text-sm w-full transition-colors hover:bg-green-300 focus:ring-2 ring-gray-800',

                )}
        >

            {children}

        </Comp>
    )
}