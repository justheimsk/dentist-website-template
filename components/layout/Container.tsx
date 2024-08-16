export type ContainerProps = {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <>
      <div className="sm:px-[2%] md:px-[8%]">{props.children}</div>
    </>
  )
}
