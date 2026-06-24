import ClientFooter from "@/module/client/layout/client-footer";
import ClientHeader from "@/module/client/layout/client-header";


export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClientHeader />
      <main>{children}</main>
      <ClientFooter />
    </>
  );
}