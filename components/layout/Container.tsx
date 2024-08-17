export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <>
      <div {...props} className={`px-[6%] md:max-w-[1200px] md:mx-auto ${props.className}`}>{props.children}</div>
    </>
  )
}
