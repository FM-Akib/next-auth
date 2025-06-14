import { doSocialLogin } from '@/app/actions';
import { IconArrowNarrowLeft, IconBrandGithubFilled, IconBrandGoogleFilled, IconLogin2 } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
    return (
     <div
      className="flex flex-col justify-center items-center bg-zinc-950 h-max min-h-[100vh] pb-5"
    >
      <div
        className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6"
      >
        <Link className="mt-10 w-fit text-white" href="/">
          <div className="flex w-fit items-center lg:pl-0 lg:pt-0 xl:pt-0">
            <IconArrowNarrowLeft stroke={1.5} />
            <p className="ml-0 text-sm text-white">Back to the website</p>
          </div>
        </Link>
        <div
          className="my-auto mb-auto mt-8 flex flex-col md:mt-[70px] w-[350px] max-w-[450px] mx-auto md:max-w-[450px] lg:mt-[30px] lg:max-w-[450px]"
        >
          <p className="text-[32px] font-bold text-white">Sign In</p>
          <p className="mb-2.5 mt-2.5 font-normal text-zinc-400">
            Enter your email and password to sign in!
          </p>

          <div className="">
            <form action={doSocialLogin} className="pb-2">
              <button
                className=" cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-none hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-white py-6"
                type="submit"
                name='action'
                value="google"
              >
                <span className="mr-2"><IconBrandGoogleFilled /></span>
                <span>Google</span>
              </button>

              <button
                className="cursor-pointer mt-3 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-none hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-white py-6"
                type="submit"
                name='action'
                value="github"
              >
                <span className="mr-2"><IconBrandGithubFilled /></span>
                <span>Github</span>
              </button>
            </form>
          </div>

          <div className="relative my-4">
            <div className="relative flex items-center py-1">
              <div className="grow border-t border-zinc-800"></div>
              <div className="grow border-t border-zinc-800"></div>
            </div>
          </div>
          <div>


            <form  className="mb-4">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label className="text-white" htmlFor="email">Email</label>
                 
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                  />
                  
                  <label
                    className="text-zinc-950 mt-2 dark:text-white"
                    htmlFor="password"
                    >Password
                    </label>
                   
                    <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border bg-zinc-950 text-white border-zinc-800 px-4 py-3 text-sm font-medium placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    name="password"
                  />
                </div>

                <button
                  className="whitespace-nowrap ring-offset-background transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-zinc-950 hover:bg-white/90 active:bg-white/80 flex w-full max-w-full mt-6 items-center justify-center rounded-lg px-4 py-4 text-base font-medium"
                  type="submit"
                >
                 <IconLogin2 stroke={1} /> Sign in
                </button>

              </div>
            </form>

            <p>
              <a
                href="/dashboard/signin/forgot_password"
                className="font-medium text-white text-sm"
                >Forgot your password?</a
              >
            </p>
            <p>
              <a
                href="/dashboard/signin/email_signin"
                className="font-medium text-white text-sm"
                >Sign in via magic link</a
              >
            </p>
            <p>
              <Link
                href="/dashboard/signin/signup"
                className="font-medium text-white text-sm"
                >Don&apos;t have an account? Sign up</Link>
            </p>
          </div>
        </div>
      </div>

    </div>
    );
};

export default LoginForm;