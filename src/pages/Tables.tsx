import { useState } from "react";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { CaretSortIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowDownIcon, ArrowUpIcon, ChevronLeftIcon, ChevronRightIcon, MoreHorizontal } from "lucide-react";

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

const payments: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

const pcolumns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => {
            return <span className="font-mono">{row.getValue("id")}</span>
        },
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Email
                    {column.getIsSorted() === "desc" ? (
                        <ArrowDownIcon className="ml-2 h-4 w-4" />
                    ) : column.getIsSorted() === "asc" ? (
                        <ArrowUpIcon className="ml-2 h-4 w-4" />
                    ) : (
                        <CaretSortIcon className="ml-2 h-4 w-4" />
                    )}
                </Button>
            )
        },
    },
    {
        accessorKey: "amount",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Amount
                    {column.getIsSorted() === "desc" ? (
                        <ArrowDownIcon className="ml-2 h-4 w-4" />
                    ) : column.getIsSorted() === "asc" ? (
                        <ArrowUpIcon className="ml-2 h-4 w-4" />
                    ) : (
                        <CaretSortIcon className="ml-2 h-4 w-4" />
                    )}
                </Button>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}>
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function Tables() {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data: payments,
        columns: pcolumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <>
            <PageHeader>
                <PageHeaderHeading>Tables</PageHeaderHeading>
            </PageHeader>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Sample Table</CardTitle>
                    </CardHeader>
                    <Table className="border-t">
                        <TableHeader className="bg-gray-50 dark:bg-slate-900">
                            <TableRow>
                                <TableHead className="w-1 pl-6">Invoice</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right pr-6">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium  pl-6">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right pr-6">$250.00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium  pl-6">INV002</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right pr-6">$250.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
                <Card>
                    <CardHeader className="md:flex-row md:justify-between space-y-0 items-center py-3.5">
                        <CardTitle>Sample Data Tables</CardTitle>
                        <div>
                            <div className="flex items-center">
                                <Input
                                    placeholder="Filter emails..."
                                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                                    onChange={(event) =>
                                        table.getColumn("email")?.setFilterValue(event.target.value)
                                    }
                                    className="max-w-sm"
                                />
                            </div>
                        </div>
                    </CardHeader>
                    <div>
                        <Table className="border-t border-b">
                            <TableHeader className="bg-gray-50 dark:bg-slate-900">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header, index) => {
                                            return (
                                                <TableHead key={header.id} className={cn({ 'pl-6': index === 0, 'pr-6': index + 1 === headerGroup.headers.length, })}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}>
                                            {row.getVisibleCells().map((cell, index) => (
                                                <TableCell key={cell.id} className={cn({ 'pl-6': index === 0, 'pr-6': index + 1 === row.getVisibleCells().length, })}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={pcolumns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <CardFooter className="flex items-center justify-end py-4">
                        <div className="flex-1 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Select
                                    value={`${table.getState().pagination.pageSize}`}
                                    onValueChange={(value: string) => {
                                        table.setPageSize(Number(value))
                                    }}>
                                    <SelectTrigger className="h-8 w-[70px]">
                                        <SelectValue placeholder={table.getState().pagination.pageSize} />
                                    </SelectTrigger>
                                    <SelectContent side="top">
                                        {[1, 5, 10, 15].map((pageSize) => (
                                            <SelectItem key={pageSize} value={`${pageSize}`}>
                                                {pageSize}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <p className="text-sm font-medium">rows per page</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 lg:space-x-8">
                            <div className="flex w-[100px] items-center justify-center text-sm font-medium text-muted-foreground">
                                Page {table.getState().pagination.pageIndex + 1} of{" "}
                                {table.getPageCount()}
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    className="hidden h-8 w-8 p-0 lg:flex"
                                    onClick={() => table.setPageIndex(0)}
                                    disabled={!table.getCanPreviousPage()}>
                                    <span className="sr-only">Go to first page</span>
                                    <DoubleArrowLeftIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-8 w-8 p-0"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}>
                                    <span className="sr-only">Go to previous page</span>
                                    <ChevronLeftIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-8 w-8 p-0"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}>
                                    <span className="sr-only">Go to next page</span>
                                    <ChevronRightIcon className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="hidden h-8 w-8 p-0 lg:flex"
                                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                    disabled={!table.getCanNextPage()}>
                                    <span className="sr-only">Go to last page</span>
                                    <DoubleArrowRightIcon className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}