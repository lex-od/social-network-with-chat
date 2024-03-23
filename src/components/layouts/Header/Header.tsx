import CurrentUser from "./_CurrentUser";

const Header = () => {
  return (
    <div className="grid grid-cols-[200px_1fr]">
      <CurrentUser />
      <div className="p-4">ChatTitle</div>
    </div>
  );
};

export default Header;
