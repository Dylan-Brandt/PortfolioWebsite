import Link from "next/link";

interface ButtonProps {
  href: string,
  text: string
}

export default function ButtonLink(props: ButtonProps) {
  return (
    <Link href={props.href} className="relative inline-block px-8 py-4 font-medium group text-xl">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-light-green group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-light-green group-hover:bg-light-green"></span>
      <span className="relative text-light-green group-hover:text-white">{props.text}</span>
    </Link>
  )
}