export type SectionProps = {
  children: React.ReactNode;
  ignoreNavbar?: boolean;
  fullHeight?: boolean;
}

export function Section(props: SectionProps) {
  return (
    <>
      <section className={`${props.fullHeight ? 'h-screen' : ''} flex items-center ${props.ignoreNavbar ? 'section__ignore-navbar' : ''}`}>{props.children}</section>
    </>
  )
}
