import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { authService } from "../../../app/service/authService";
import { SignupParams } from "../../../app/service/authService/signup";

const schema = z.object({
  name: z.string().min(1, 'O Nome é obrigatório.'),
  email: z.string().min(1, 'O E-mail é obrigatório.').email('Informe um e-mail válido.'),
  password: z.string().min(8, 'A Senha é obrigatória e deve conter pelo menos 08 dígitos.'),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  })

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data)
      toast.success(accessToken)
    } catch {
      toast.error('Ocorreu um erro ao criar a sua conta!')
    }
  });

  console.log({ isPending })

  return { register, errors, handleSubmit, isPending }
}