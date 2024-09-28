"use client";
import { useState, useEffect } from "react";

// comps
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const users: User[] = [
  {
    id: 1,
    firstName: "Bob",
    lastName: "Burger",
    email: "bob@gmail.com",
  },
  {
    id: 2,
    firstName: "Linda",
    lastName: "Burger",
    email: "linda@gmail.com",
  },
];

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    header: () => <span>First Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
];

const Page = () => {
  const [data, setData] = useState(() => [...users]);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState<User[]>([]);

  useEffect(() => {
    if (search.trim() !== "") {
      setFilterData(
        data.filter((user: User) =>
          Object.values(user)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
        )
      );
      setFilter(true);
    } else {
      setFilter(false);
    }
  }, [search, data]);

  const table = useReactTable({
    data: filter ? filterData : data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleAddUser = () => {
    setData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        firstName: "",
        lastName: "",
        email: "",
      },
    ]);
  };

  const handleUpdate = (rowId: number, key: keyof User, value: string) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === rowId ? { ...row, [key]: value } : row
      )
    );
  };

  return (
    <div className="p-2">
      <div>
        <div>Search</div>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="text-black"
          />
        </div>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  <input
                    className="outline text-white bg-black"
                    type="text"
                    defaultValue={cell.getValue() as string}
                    onBlur={(e) =>
                      handleUpdate(
                        row.original.id,
                        cell.column.id as keyof User,
                        e.target.value
                      )
                    }
                  />
                </td>
              ))}
              <td>
                <button
                  onClick={() =>
                    setData((prev) =>
                      prev.filter((user) => user.id !== row.original.id)
                    )
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddUser} className="mt-2">
        Add User
      </button>
    </div>
  );
};

export default Page;
