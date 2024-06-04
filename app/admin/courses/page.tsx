import { Button } from "@/components/ui/button";
import ListCourses from "./List";

export default function Courses(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/courses/new">
                <Button>Cadastrar Curso</Button>
            </a>
            
            </div>
            
            <ListCourses/>
        </div>
        
        
    )
}