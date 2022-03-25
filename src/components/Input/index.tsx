import React, {
  forwardRef,
  ForwardRefRenderFunction,
  // eslint-disable-next-line prettier/prettier
  useCallback
} from 'react';
import { FieldError } from 'react-hook-form';
import { zipCode } from './mask';
import { Container } from './styles';

interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, type, placeholder, error = null, ...rest },
  ref
): JSX.Element => {
  return (
    <>
      <Container
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      {!!error && <strong>{error.message}</strong>}
    </>
  );
};
export const Input = forwardRef(InputBase);

type InputCepProps = React.HTMLProps<HTMLInputElement>;

export function InputCep({
  type,
  name,
  placeholder,
  onChange,
  value,
}: InputCepProps): JSX.Element {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    // regex
    zipCode(e);
  }, []);
  return (
    <Container
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onKeyUp={handleKeyUp}
    />
  );
}
