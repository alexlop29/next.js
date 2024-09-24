type InputProps = {
  message: string;
}

export const Message = ({message}: InputProps) => {
  return (
    <>
      <div>{message}</div>
    </>
  );
};
