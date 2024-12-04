import DefaultLayout from "@/components/layouts/Default";
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
import { PetType } from "@prisma/client";
import { Label } from "@radix-ui/react-label";
import { Form, Link } from "@remix-run/react";

export interface CreateProps {}

export function Create({}: CreateProps) {
  return (
    <DefaultLayout title="Create">
      <Form method="POST" className="grid gap-4" encType="multipart/form-data">
        <Label htmlFor="name">Name</Label>
        <Input name="name" id="name" />

        <Select>
          <SelectTrigger className="w-[180px]">
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

        <Label htmlFor="birthday">Birthday</Label>
        <Input name="birthday" id="birthday" />

        <div className="flex items-center justify-between">
          <Button type="submit">Add pet</Button>
          <Button asChild variant="link">
            <Link to="/">Cancel</Link>
          </Button>
        </div>
      </Form>
    </DefaultLayout>
  );
}
