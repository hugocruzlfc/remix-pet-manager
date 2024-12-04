import { PetType } from "@prisma/client";
import { Bird, Cat, Dog, Fish, Rabbit, Worm } from "lucide-react";
import { createElement } from "react";

export function getPetType(petType: PetType | undefined) {
  const typeMapper: Record<PetType, JSX.Element> = {
    Bird: createElement(Bird),
    Cat: createElement(Cat),
    Dog: createElement(Dog),
    Fish: createElement(Fish),
    Bunny: createElement(Rabbit),
    Reptile: createElement(Worm),
  };

  if (!petType) {
    return null;
  }

  return typeMapper[petType];
}
