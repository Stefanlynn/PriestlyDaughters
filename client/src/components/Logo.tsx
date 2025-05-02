import logoPath from "@assets/4.png";

const Logo = () => {
  return (
    <img 
      src={logoPath} 
      alt="Logo" 
      className="w-full h-auto filter drop-shadow-md"
    />
  );
};

export default Logo;
