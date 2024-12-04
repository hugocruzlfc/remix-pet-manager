import DefaultLayout from "@/components/layouts/Default";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prisma-client";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Pet MAnager" },
    {
      name: "description",
      content: "Welcome to Pet Manager App",
    },
  ];
};

const PER_PAGE = 12;

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams;
  const currentPage = Math.max(Number(query.get("page") || 1), 1);
  const options: {
    take: number;
    skip: number;
    orderBy: { [key: string]: string };
    where?: { name: { contains: string | null; mode: string } };
  } = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE,
    orderBy: {
      updatedAt: "desc",
    },
  };
  const countOptions: Partial<typeof options> = {};

  if (query.get("search")) {
    options.where = {
      name: {
        contains: query.get("search"),
        mode: "insensitive",
      },
    };
    countOptions.where = options.where;
  }
  if (query.get("orderBy")) {
    const orderBy = query.get("orderBy");
    options.orderBy = {
      [orderBy || "updatedAt"]: query.get("orderDir") || "asc",
    };
  }

  const [pets, count] = await Promise.all([
    // SELECT * FROM "Pet" WHERE name LIKE '%?%' ORDER BY column ASC|DESC LIMIT 12 OFFSET 1
    prisma.pet.findMany({}),
    // SELECT COUNT(id) FROM "Pet"
    prisma.pet.count(),
  ]);
  return {
    pets,
    count,
  };
}

export default function () {
  const { pets, count } = useLoaderData<typeof loader>();
  return (
    <DefaultLayout title="Pets!">
      <Form
        // onChange={handleChange}
        className="grid flex-wrap items-end gap-x-4 gap-y-2 sm:flex"
      >
        <Input
          name="search"
          id="search"
          // defaultValue={searchParams.get("search") || ""}
          className="flex-grow"
        />

        <div className="order-1 flex w-full gap-8">
          <div className="flex gap-2">
            <label htmlFor="orderBy">Sort By:</label>
            <select
              name="orderBy"
              id="orderBy"
              className="p-0"
              // defaultValue={searchParams.get("orderBy") || "updatedAt"}
            >
              <option value="name">Name</option>
              <option value="updatedAt">Updated</option>
            </select>
          </div>
          <div className="flex gap-2">
            <label htmlFor="orderDir">Direction:</label>
            <select
              name="orderDir"
              id="orderDir"
              className="p-0"
              // defaultValue={searchParams.get("orderDir") || "desc"}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <Button type="submit">Search</Button>
      </Form>

      <div className="mt-4" aria-live="polite">
        <p>{`Displaying ${pets.length} of ${count}.`}</p>
      </div>

      {/* <Grid
        items={pets.map((pet) => (
          <Card to={`/pet/${pet.id}`} title={pet.name} type={pet.type}></Card>
        ))}
      ></Grid>

      {totalPages > 1 && (
        <Pagination totalPages={totalPages} pageParam="page" className="mt-8" />
      )} */}
    </DefaultLayout>
  );
}
