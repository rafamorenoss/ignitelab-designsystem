import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) {

    return (
        <CheckboxPrimitive.Root
            className="w-6 h-6 flex items-center p-[2px] bg-gray-100 rounded-md border-gray-800 border-2"
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='w-5 h-5 text-green-700' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}