import { Logo } from "@/components/logo";

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <div className="flex h-screen flex-col justify-center md:flex-row-reverse ">
      <div className="mx-auto flex w-full items-start px-4 md:w-1/3 md:items-center md:px-0">
        <div className="relative mx-auto my-auto w-full min-w-min max-w-sm text-primary md:-left-7 md:mx-0">
          <div className="bg-background py-4 pl-4 md:pl-0">
            <Logo className="w-56 h-auto" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:w-2/3 md:border-r">
        <div className="mx-auto my-auto w-full min-w-min max-w-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
