export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <>
      <div {...props} className={`sm:px-[2%] md:px-[8%] ${props.className}`}>{props.children}</div>
    </>
  )
}
