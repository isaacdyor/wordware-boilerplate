import { Navbar } from "@/components/navbar";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
