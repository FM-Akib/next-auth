import { doSocialLogin } from "@/app/actions";
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import React from "react";

const SocialLogin = () => {
  return (
    <div className="">
      <form
        action={doSocialLogin}
        className=" flex gap-2 justify-items-center "
      >
        <button
          className=" cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-none hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-white "
          type="submit"
          name="action"
          value="google"
        >
          <span className="mr-2">
            <IconBrandGoogleFilled />
          </span>
          <span>Google</span>
        </button>

        <button
          className="cursor-pointer  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-800 bg-none hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-white "
          type="submit"
          name="action"
          value="github"
        >
          <span className="mr-2">
            <IconBrandGithubFilled />
          </span>
          <span>Github</span>
        </button>
      </form>
    </div>
  );
};

export default SocialLogin;
