import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { httpClient } from "../../../app/service/httpClient";

const schema = z.object({
  email: z.string().min(1, 'O E-mail é obrigatório.').email('Informe um e-mail válido.'),
  password: z.string().min(8, 'A Senha é obrigatória e deve conter pelo menos 08 dígitos.'),
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    await httpClient.post('/auth/signin', data)
  })

  return { handleSubmit, register, errors };
}