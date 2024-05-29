import { Button } from "@/components/ui/button";
import ListStudent from "./List";
import NewStudent from "./New";

export default function Studant(){

    return(
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/student/new">
                <Button>Cadastrar Estudante</Button>
            </a>
            
            </div>
            
            <ListStudent/>
        </div>
        
        
    )
}