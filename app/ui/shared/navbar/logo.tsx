type Props = {
  className: string
  isOpen: boolean
}

export default function Logo({ className, isOpen }: Props) {
  return (
    <>
      {isOpen ? (
        <svg
          className={className}
          fill="none"
          height="22"
          viewBox="0 0 122 22"
          width="122"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#fff">
            <path d="m8.192 21.44h-6.016v-11.2h-2.176v-4.928h2.304c.64-3.04 3.616-5.312 8.896-5.312h1.28v4.288h-2.24c-1.664 0-2.464.16-2.432 1.024h4.672v4.928h-4.288z" />
            <path d="m20.1047 3.84h-6.016v-3.84h6.016zm0 17.6h-6.016v-16.128h6.016z" />
            <path d="m28.3622 21.44h-6.016v-16.128h5.6321v4.896h.32c.3519-2.688 2.112-5.216 6.432-5.216 4.352 0 6.3999 2.624 6.3999 6.112v10.336h-6.0159v-8.128c0-2.24-.8321-2.944-3.4561-2.944-2.656 0-3.296.672-3.296 2.752z" />
            <path d="m48.4447 21.76c-3.648 0-5.696-1.664-5.696-4.416 0-2.272 1.568-3.904 5.216-4.256l6.56-.64v-.32c0-1.632-.7039-1.888-2.8479-1.888-1.9841 0-2.592.384-2.592 1.728v.128h-6.0161v-.064c0-4.288 3.584-7.04 9.056-7.04 5.632 0 8.352 2.752 8.352 7.264v9.184h-5.632v-3.392h-.32c-.608 2.272-2.592 3.712-6.08 3.712zm.352-4.8c0 .512.512.608 1.44.608 2.912 0 4.096-.352 4.256-1.792l-4.9279.576c-.544.064-.7681.256-.7681.608z" />
            <path d="m68.596 21.44h-6.016v-16.128h5.632v4.896h.32c.352-2.688 2.112-5.216 6.432-5.216 4.352 0 6.4 2.624 6.4 6.112v10.336h-6.016v-8.128c0-2.24-.832-2.944-3.456-2.944-2.656 0-3.296.672-3.296 2.752z" />
            <path d="m92.5185 21.76c-5.728 0-9.376-3.168-9.376-8.384 0-5.248 3.648-8.384 9.376-8.384 5.504 0 9.0235 2.816 9.0235 7.136v.512h-5.9835v-.256c0-1.664-1.216-2.016-3.168-2.016-2.208 0-3.264.48-3.264 3.008 0 2.496 1.056 2.976 3.264 2.976 1.952 0 3.168-.32 3.168-1.984v-.288h5.9835v.544c0 4.288-3.5195 7.136-9.0235 7.136z" />
            <path d="m112.462 21.76c-5.472 0-9.312-2.336-9.312-8.384 0-5.248 3.808-8.384 9.184-8.384 5.568 0 9.12 2.784 9.12 7.968 0 .544-.032.96-.096 1.536h-12.64c.096 1.952.96 2.496 3.52 2.496 2.432 0 3.072-.416 3.072-1.376v-.352h6.016v.384c0 3.584-3.424 6.112-8.864 6.112zm-.256-12.16c-2.208 0-3.136.48-3.392 1.856h6.816c-.224-1.376-1.184-1.856-3.424-1.856z" />
          </g>
        </svg>
      ) : (
        <svg
          className={className}
          fill="none"
          height="22"
          viewBox="0 0 14 22"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.95201 21.44h-6.016v-11.2h-2.176v-4.928h2.304c.64-3.04 3.616-5.312 8.89599-5.312h1.28v4.288h-2.24c-1.66399 0-2.46399.16-2.43199 1.024h4.67199v4.928h-4.28799z"
            fill="#fff"
          />
        </svg>
      )}
    </>
  )
}
