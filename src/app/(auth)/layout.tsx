import { AuthLayout } from "@/components/layouts/auth-layout";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
};

export default RootLayout;
