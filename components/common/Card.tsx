import Image from "next/image";

export type CardProps = {
  bigger?: boolean;
  label: string;
  description?: string;
  image: string;
}

export function Card(props: CardProps) {
  return (
    <>
      <div className={`${props.bigger ? 'w-full' : 'min-w-[27%]'} min-h-[400px] bg-blue-500 rounded-3xl flex flex-col p-3 text-left justify-between`}>
        <div className="flex flex-col text-white p-4">
          <span className="text-xl font-bold">{props.label}</span>
          <span className="text-sm">{props.description}</span>
        </div>
        <Image className="rounded-3xl w-full h-[300px] object-cover object-center" src={props.image} width={500} height={500} alt={props.label} />
      </div>
    </>
  )
}
