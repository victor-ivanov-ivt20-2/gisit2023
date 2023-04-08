// import Logo from "./svg/logo";
import { SecondaryButton } from "./ui/button";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center h-[100px] bg-white rounded-b-[44px]">
          {/* <Logo></Logo> */}
          <nav>
            <ul className="flex gap-8 text-slate-600 font-medium text-lg leading-[25px]">
              <li>Главная</li>
              <li>Метрика</li>
              <li>Способ оплаты</li>
              <li>О нас</li>
            </ul>
          </nav>
          <SecondaryButton onClick={() => console.log("Вошёл")}>
            Войти
          </SecondaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
