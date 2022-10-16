import { InputHTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-2 px-1 w-full h-11 bg-gray-100  border-b-2 border-gray-800 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-opacity-50 focus-within:ring-offset-6 focus-within:ring-offset-gray-100 ring-green-700 '>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-800'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent outline-none flex-1 text-md text-gray-900 placeholder:text-gray-600"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}