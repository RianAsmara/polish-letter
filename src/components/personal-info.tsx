import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { UseFormReturn } from "react-hook-form";
import { IApplicationForm } from "../app/types";

interface PersonalInfoSectionProps {
  form: UseFormReturn<IApplicationForm>;
}

export function PersonalInfoSection({ form }: PersonalInfoSectionProps) {

  return (
    <div id="personal-info" className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center shadow-sm">
          <span className="text-violet-600 font-semibold">1</span>
        </div>
        <h3 className="font-semibold text-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          Informasi Personal
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="nama_lengkap"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-sm font-medium text-gray-700 mb-1.5">
                Nama Lengkap
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Example: John Doe"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm hover:border-violet-400 text-sm shadow-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1.5 absolute -bottom-5" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Example: john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telepon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telepon</FormLabel>
              <FormControl>
                <Input placeholder="Example: 081234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tanggal"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="text-sm font-medium text-gray-700 mb-1.5">
                Tanggal
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm hover:border-violet-400 text-sm shadow-sm font-normal justify-start text-left",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className="text-xs text-red-500 mt-1.5 absolute -bottom-5" />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
