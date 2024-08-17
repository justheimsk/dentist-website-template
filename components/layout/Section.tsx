export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <>
      <section {...props} className={`mt-5 flex flex-col md:flex-row justify-center gap-8 lg:gap-0 lg:items-center ${props.className}`}> {props.children}</section >
    </>
  )
}
