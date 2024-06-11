import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache";



interface IStudent {
  id:number,
  name:string,
  email:string
}
export default async function ListStudent() {
  const student = await list()
  async function list(){
    revalidatePath("/admin/student")
    const response = await fetch("https://server20241-liart.vercel.app/students");
      return response.json();

  }

  return (
    <Table>
      <TableCaption>Lista de Estudantes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {student.map((item:IStudent) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>

          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
