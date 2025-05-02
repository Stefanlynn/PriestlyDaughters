const Logo = () => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-auto filter drop-shadow-md"
    >
      <path 
        d="M50 10C60 10 65 20 65 30C65 40 60 50 50 50C40 50 35 40 35 30C35 20 40 10 50 10Z" 
        fill="white"
      />
      <path 
        d="M35 30C35 30 30 60 40 80C40 80 45 90 50 90C55 90 60 80 60 80C70 60 65 30 65 30" 
        fill="white" 
        stroke="white" 
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Logo;
