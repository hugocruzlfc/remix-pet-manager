import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typography";
import { getPetType } from "@/lib/get-pet-type";
import { prisma } from "@/lib/prisma-client";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigation, useParams } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  // get the user by id

  const pet = await prisma.pet.findUnique({
    where: {
      id: params.id,
    },
  });

  return {
    pet,
  };
}

export default function PetsDetails() {
  const { pet } = useLoaderData<typeof loader>();
  const { id } = useParams();
  const { state } = useNavigation();

  console.log(id);
  return (
    <div className="flex flex-col items-center space-y-5 p-5">
      <TypographyH3 title={`Details of ${pet?.name}`} />

      <Card className="w-96">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-5">
              <div className="aspect-square">{getPetType(pet?.type)}</div>
              {pet?.type}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div>
            <span className="font-bold">Birthday:</span>{" "}
            {pet?.birthday?.toLocaleDateString()}
          </div>
          <div>
            <span className="font-bold">Member of:</span>{" "}
            {pet?.createdAt?.toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
