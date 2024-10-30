import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IApplicationForm } from "../app/types";
import { UseFormReturn } from "react-hook-form";

interface CompanyInfoSectionProps {
  form: UseFormReturn<IApplicationForm>;
}
export function CompanyInfoSection({ form }: CompanyInfoSectionProps) {

  return (
    <div id="company-info" className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600">2</span>
        </div>
        <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Informasi Perusahaan
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="nama_hrd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama HRD</FormLabel>
              <FormControl>
                <Input placeholder="Example: Hiring Manager" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nama_perusahaan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Perusahaan</FormLabel>
              <FormControl>
                <Input placeholder="Example: PT. XYZ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
