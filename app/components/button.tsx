interface ButtonProps {
  name: string
  variant?: 'primary' | 'outline'
  action?: string | any
  href?: string,
  height?: string
}
export function Button({
  action,
  name,
  variant = 'primary',
  href,
  height = '2rem',
}: ButtonProps) {
  return (
    <a
      onClick={action}
      href={href}
      className={
        variant === 'primary'
          ? `bg-digitalmaker-blue h-[${height}] flex max-w-[20rem] max-h-[10rem] justify-center items-center text-center hover:bg-digitalmaker-blue-200 py-[.5rem] px-[2rem] rounded-[5px] text-digitalmaker-offwhite cursor-pointer transition-all duration-75`
          : 'bg-transparent h-[${height}] max-w-[20rem] justify-center items-center text-center hover:bg-digitalmaker-blue py-[.5rem] px-[2rem] border-digitalmaker-blue border-[1px] rounded-[5px] cursor-pointer transition-all duration-75'
      }
    >
      {name}
    </a>
  )
}
