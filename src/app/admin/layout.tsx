import { headers } from "next/headers";
import { notFound } from "next/navigation";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

async function assertLocalAdminAccess() {
  const headerStore = await headers();
  const hostHeader = headerStore.get("host") || "";
  const hostname = hostHeader.split(":")[0]?.toLowerCase() || "";

  if (!LOCAL_HOSTS.has(hostname)) {
    notFound();
  }
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await assertLocalAdminAccess();
  return children;
}
