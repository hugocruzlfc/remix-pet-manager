import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "@remix-run/react";

interface PaginationProps {
  totalPages: number;
  pageParam: string;
  className?: string;
}

export default function CurrentPagination({
  totalPages = Number.MAX_SAFE_INTEGER,
  pageParam = "page",
}: PaginationProps) {
  const [queryParams] = useSearchParams();
  const currentPage = Number(queryParams.get(pageParam) || 1);
  totalPages = Number(totalPages);

  const previousQuery = new URLSearchParams(queryParams);
  previousQuery.set(pageParam, (currentPage - 1).toString());
  const nextQuery = new URLSearchParams(queryParams);
  nextQuery.set(pageParam, (currentPage + 1).toString());

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`?${previousQuery.toString()}`} />
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`?${nextQuery.toString()}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
