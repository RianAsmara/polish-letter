import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { IApplicationForm } from "../app/types";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface JobDetailSectionProps {
  form: UseFormReturn<IApplicationForm>;
}
export function JobDetailSection({ form }: JobDetailSectionProps  ) {

  return (
    <div id="job-detail" className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-purple-600">3</span>
        </div>
        <h3 className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Detail Pekerjaan
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <FormField
          control={form.control}
          name="detail_pekerjaan"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-sm font-medium text-gray-700 mb-1">
                Detail Pekerjaan
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Isikan dengan detail pekerjaan yang akan dilamar"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 min-h-[120px] bg-white/50 backdrop-blur-sm hover:border-purple-400"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1 absolute -bottom-5" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
