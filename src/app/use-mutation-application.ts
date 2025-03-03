import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState,  useCallback } from "react";
import { IApplicationForm } from "./types";

export const FormSchema = z.object({
  nama_lengkap: z
    .string({ required_error: "Nama Lengkap harus diisi" })
    .toLowerCase(),
  email: z
    .string({ required_error: "Email harus diisi" })
    .email("Email tidak valid"),
  telepon: z.string({ required_error: "Nomor telepon harus diisi" }),
  tanggal: z.date({ required_error: "Tanggal harus diisi" }),

  nama_hrd: z
    .string({ required_error: "Nama HRD harus diisi" })
    .toLowerCase(),
  nama_perusahaan: z
    .string({ required_error: "Nama perusahaan harus diisi" })
    .toLowerCase(),
  
  detail_pekerjaan: z
    .string({ required_error: "Detail pekerjaan harus diisi" })
    .toLowerCase(),
  
  language: z.string({ required_error: "Bahasa harus dipilih" }).toLowerCase(),
});

export type FormValues = z.infer<typeof FormSchema>;

export function useApplicationForm() {
  const [progress, setProgress] = useState(0);

  const calculateProgress = useCallback((formValues: IApplicationForm) => {
    const totalFields = Object.keys(formValues).length;
    const filledFields = Object.values(formValues).filter(value => {
      if (value instanceof Date) return true;
      return value !== undefined && value !== '' && value !== null;
    }).length;
    
    return Math.round((filledFields / totalFields) * 100);
  }, []);

  const form = useForm<IApplicationForm>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nama_lengkap: "",
      email: "",
      telepon: "",
      tanggal: undefined,
      nama_hrd: "",
      nama_perusahaan: "",
      detail_pekerjaan: "",
      language: "",
    }
  });

  form.watch((data) => {
    setProgress(calculateProgress(data as IApplicationForm));
  });

  const submitApplication = async (data: FormValues) => {
    const response = await fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return {
    form,
    progress,
    submitApplication,
  };
}