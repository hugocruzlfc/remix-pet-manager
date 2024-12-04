import { getPetType } from "@/lib/get-pet-type";
import { Pet } from "@prisma/client";
import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export interface PetTileProps {
  pet: Pet;
}

export function PetTile({ pet }: PetTileProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2">
          <div className="aspect-square h-full w-full">
            {getPetType(pet.type)}
          </div>
          {pet.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="link" asChild>
          <Link to={`/pets/${pet.id}`}>View</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
