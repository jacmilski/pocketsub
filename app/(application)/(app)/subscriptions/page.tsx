import { UserButton } from "@clerk/nextjs";

export default function SubscriptionsPage() {
  return (
    <main className="mx-4  px-0 text-center text-zinc-900">
      <UserButton afterSignOutUrl="/" />
      <p>Subscriptions</p>
    </main>
  );
}
