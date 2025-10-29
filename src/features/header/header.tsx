function Header() {
  return (
    <div className="mb-8 space-y-4 border-b py-8 text-center shadow">
      <h1 className="text-4xl">Savvy Tech Front-End Task </h1>
      <h3 className="text-2xl">
        Candidate : <span className="text-blue-700">Babak Alikahi</span>
      </h3>

      <p className="text-xl">
        github link :{" "}
        <a
          href="https://github.com/BabakAlikahi/savyTech-task"
          target="_blank"
          className="text-gray-700"
        >
          github link
        </a>
      </p>
    </div>
  );
}

export default Header;
