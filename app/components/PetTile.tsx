import { getPetType } from "@/lib/get-pet-type";
import { Pet } from "@prisma/client";
import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

export interface PetTileProps {
  pet: Pet;
}

export function PetTile({ pet }: PetTileProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <div className="aspect-square">{getPetType(pet.type)}</div>
            {pet.name}
          </div>
          <Button variant="link" asChild>
            <Link to={`/pets-details/${pet.id}`}>View</Link>
          </Button>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
