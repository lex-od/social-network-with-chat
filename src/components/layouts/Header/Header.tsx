import CurrentUser from "./_CurrentUser";

const Header = () => {
  return (
    <div className="grid grid-cols-[200px_1fr_200px]">
      <CurrentUser />
      <div>ChatTitle</div>
      <div>HeaderActions</div>
    </div>
  );
};

export default Header;
