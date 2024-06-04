"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Nome precisa tem no mínimo 2 caracteres."
    }),

    description: z.string().min(2, {
        message: "Descrição precisa tem no mínimo 2 caracteres."
    }),

})

export default function SaveCourses() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "HTML",
            description: "O curso de HTML é oferecido...",
        },
    })

    async function onSubmit(courses: z.infer<typeof FormSchema>) {
        const requestOption= {
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(courses)
        }
        const response = await fetch("https://server20241.vercel.app/courses",requestOption)
        form.reset();
        alert("Curso Cadastrado com Sucesso!")


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite nome do Curso" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite a descrição do curso" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
