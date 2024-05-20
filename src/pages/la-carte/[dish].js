import { useRouter } from "next/router";

export default function MenuDishPage() {
  const router = useRouter();
  const { dish, title } = router.query;

  return (
    <div>
      <h1>{dish}</h1>
      <div>{title}</div>
    </div>
  );
}
