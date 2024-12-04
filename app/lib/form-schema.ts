import { PetType } from "@prisma/client";
import { z } from "zod";

export const petFormSchema = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(PetType),
  birthday: z.string().transform((value) => new Date(value)),
});
