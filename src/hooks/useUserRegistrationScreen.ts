import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const userRegistrationSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
});
export const useUserRegistrationScreen = () => {
  const methods = useForm({
    resolver: zodResolver(userRegistrationSchema),
  });

  const submitForm = (values: any) => {
    console.log(values);
  };

  return { methods, submitForm };
};
