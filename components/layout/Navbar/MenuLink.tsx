export type MenuLinkProps = {
  children: React.ReactNode;
}

export function MenuLink(props: MenuLinkProps) {
  return (
    <li className="font-medium text-sm cursor-pointer relative after:content-[''] after:rounded-sm after:transition-all after:absolute after:bottom-[-5px] after:left-0 after:w-1 after:h-[3px] after:bg-blue-500 after:opacity-0 hover:after:opacity-100 hover:after:w-full">{props.children}</li>
  )
}
