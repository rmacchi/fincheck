import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data)
  });

  return { register, errors, handleSubmit }
}