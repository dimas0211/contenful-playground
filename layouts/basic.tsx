import AppNavbar from "../components/AppNavbar";

export default function BasicLayout({ children }: { children: any }) {
  return (
    <>
      <AppNavbar />
      <main className="page-container">{children}</main>
    </>
  );
}
