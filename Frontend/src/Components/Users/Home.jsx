import Logo from "../../assets/Logo.png";


function Home() {
  return (
    <div className="flex  items-center justify-center h-80">
      <img 
        src={Logo}
        className="h-48 lg:h-60 w-auto object-contain"
        alt="Logo"
      />
    </div>
  );
}

export default Home;
