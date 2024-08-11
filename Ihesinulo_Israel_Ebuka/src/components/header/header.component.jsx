
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav className="mt-4 md:mt-0">
          <a href="#about" className="block md:inline-block px-3">About</a>
          <a href="#projects" className="block md:inline-block px-3">Projects</a>
          <a href="#contact" className="block md:inline-block px-3">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
