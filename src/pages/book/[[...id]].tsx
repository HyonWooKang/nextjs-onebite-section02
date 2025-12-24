import { useRouter } from "next/router";

// Optional Catch All Segment Page by the file name ([], [...], [[...]])
export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>book {id}</h1>;
}
