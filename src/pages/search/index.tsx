import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router"; // page router

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return <h1>search page {q}</h1>;
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
