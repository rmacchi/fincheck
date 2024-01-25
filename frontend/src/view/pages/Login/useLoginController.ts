import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../../../app/service/authService";
import { SigninParams } from "../../../app/service/authService/signin";
import toast from "react-hot-toast";


const schema = z.object({
  email: z.string().min(1, 'O E-mail é obrigatório.').email('Informe um e-mail válido.'),
  password: z.string().min(8, 'A Senha é obrigatória e deve conter pelo menos 08 dígitos.'),
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch {
      toast.error('Credenciais inválidas!')
    }
  });

  return { handleSubmit, register, errors, isPending };
}