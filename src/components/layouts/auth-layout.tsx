import { Logo } from "../logo";

export const AuthLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex h-screen flex-col justify-center md:flex-row-reverse">
      <div className="mx-auto flex w-full items-start px-4 md:w-1/3 md:items-center md:px-0">
        <div className="relative mx-auto my-auto w-full min-w-min max-w-sm text-primary md:-left-5 md:mx-0">
          <div className="bg-background py-4 pt-4">
            <Logo />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 md:w-2/3 md:border-r">
        <div className="mx-auto my-auto w-full min-w-min max-w-sm py-4">
          {children}
        </div>
      </div>
    </div>
  );
};
