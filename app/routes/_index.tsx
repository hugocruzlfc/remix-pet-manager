import CurrentPagination from "@/components/CurrentPagination";
import { PetTile } from "@/components/PetTile";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TypographyH3 } from "@/components/ui/typography";
import { prisma } from "@/lib/prisma-client";
import { Prisma } from "@prisma/client";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";

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

  const options: Prisma.PetFindManyArgs = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE,
    orderBy: {
      updatedAt: "desc",
    },
    where: {},
  };

  const countOptions: Prisma.PetCountArgs = {};

  if (query.get("search")) {
    const search = query.get("search") || "";
    options.where = {
      name: {
        contains: search,
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
    prisma.pet.findMany(options),
    // SELECT COUNT(id) FROM "Pet"
    prisma.pet.count(countOptions),
  ]);
  return {
    pets,
    count,
  };
}

export default function () {
  const [searchParams] = useSearchParams();
  const { pets, count } = useLoaderData<typeof loader>();
  const totalPages = Math.ceil(count / PER_PAGE);

  return (
    <div className="space-y-5">
      <TypographyH3 title="Pets" />
      <Form className="flex flex-wrap items-end gap-x-4 space-y-5">
        <div className="flex w-full items-center gap-2">
          <Input
            name="search"
            id="search"
            defaultValue={searchParams.get("search") || ""}
          />
        </div>

        <div className="flex w-full gap-8">
          <Select
            name="orderBy"
            defaultValue={searchParams.get("orderBy") || ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="updatedAt">Updated</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            name="orderDir"
            defaultValue={searchParams.get("orderDir") || ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="asc">Ascending</SelectItem>
                <SelectItem value="desc">Descending</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">
          Search
        </Button>
      </Form>

      <div className="my-4" aria-live="polite">
        <p>{`Displaying ${pets.length} of ${count}.`}</p>
      </div>

      <div className="space-y-2">
        {pets.length > 0 ? (
          pets.map((pet) => <PetTile key={pet.id} pet={pet} />)
        ) : (
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Not pets found!</CardTitle>
            </CardHeader>
          </Card>
        )}
      </div>

      {totalPages > 1 && (
        <CurrentPagination totalPages={totalPages} pageParam="page" />
      )}
    </div>
  );
}
