import Product from './component/Product/Product';
import SideMenu from './component/SideMenu/SideMenu';

export default function Home() {
  return (
    <main className="grid grid-cols-[60px_1fr] md:grid-cols-[306px_1fr]  ">
      <SideMenu />
      <Product />
    </main>
  );
}
