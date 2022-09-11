export enum ContentMode {
  light,
  dark
}


export const Header = ({ headerMode = ContentMode.dark }: {headerMode?: ContentMode}) => {

  const imageUri = headerMode === ContentMode.dark ? "https://cdn.shopify.com/s/files/1/2535/0708/files/Transparent_Black_White_Logo_600x@2x.png?v=1534970560" : "https://cdn.shopify.com/s/files/1/2535/0708/files/Transparent_Black_White_Logo_Horizontal_600x.png?v=1534969800";
  const headerStyle = headerMode === ContentMode.dark ? "bg-black" : "bg-white border-b border-black-thin";

  return (
    <header className={`w-full ${headerStyle}`}>
      <a className="flex justify-center align-center px-6 py-4 h-1/2" href="/">
        <img
          src={imageUri}
          className="h-12"
        >
        </img>
      </a>
    </header>
  )
}