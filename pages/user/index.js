import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/dashboard");
  }, [router]);

  return null;
};

export default RedirectPage;
