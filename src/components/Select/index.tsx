import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';
import { Container } from './styles';

interface SelectProps {
  children: ReactNode;
  name: string;
  error?: FieldError;
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { children, name, error = null, ...rest },
  ref
): JSX.Element => {
  return (
    <>
      <Container name={name} id={name} ref={ref} {...rest}>
        {children}
      </Container>
      {!!error && <strong>{error.message}</strong>}
    </>
  );
};

export const Select = forwardRef(SelectBase);
