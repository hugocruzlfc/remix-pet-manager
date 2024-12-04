import { Button } from "@/components/ui/button";
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
import { petFormSchema } from "@/lib/form-schema";
import { PetType } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, redirect } from "@remix-run/react";

export async function action({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  const { success, data } = petFormSchema.safeParse(values);

  if (!success) {
    throw new Response("Not allowed", {
      status: 400,
    });
  }

  await prisma.pet.create({
    data: data,
  });

  return redirect("/");
}

export default function Create() {
  return (
    <div className="space-y-5">
      <TypographyH3 title="Create a new pet" />
      <Form method="POST" className="grid gap-4" encType="multipart/form-data">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="type">Type</Label>
          <Select name="type" required>
            <SelectTrigger>
              <SelectValue placeholder="Select Pet Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(PetType).map((petType) => (
                  <SelectItem key={petType} value={petType}>
                    {petType}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthday">Birthday</Label>
          <Input name="birthday" id="birthday" type="date" required />
        </div>

        <div className="flex items-center justify-between">
          <Button type="submit">Add pet</Button>
          <Button asChild variant="link">
            <Link to="/">Cancel</Link>
          </Button>
        </div>
      </Form>
    </div>
  );
}
