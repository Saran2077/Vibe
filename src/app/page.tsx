"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
const Page = () => {
  const trpc = useTRPC()
  const { data } = useQuery(
    trpc.hello.queryOptions({ text: 'Saran' })
  );

  return (
    <div className="">
      {data?.greeting}
    </div>
  );
}

export default Page;