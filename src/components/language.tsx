import { IApplicationForm } from "@/app/types";
import {
  FormItem,
  FormControl,
  FormLabel,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup } from "@radix-ui/react-radio-group";
import { RadioGroupItem } from "./ui/radio-group";
import { UseFormReturn } from "react-hook-form";

interface LanguageSectionProps {
  form: UseFormReturn<IApplicationForm>;
}
const LanguageSection = ({ form }: LanguageSectionProps) => {
  return (
    <div id="language-section" className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center shadow-sm">
          <span className="text-violet-600 font-semibold">4</span>
        </div>
        <h3 className="font-semibold text-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
          Bahasa Jawaban
        </h3>
      </div>
      <div className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row gap-4"
                >
                  <FormItem>
                    <FormControl>
                      <div
                        className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 p-4 transition-all hover:border-violet-400 ${
                          field.value === "id"
                            ? "border-violet-600 bg-violet-50 ring-2 ring-violet-600 ring-offset-2"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <RadioGroupItem value="id" className="sr-only" />
                        <div className="flex items-center gap-3">
                          <span className="p-2">
                            🇮🇩
                          </span>
                          <FormLabel className="cursor-pointer font-medium">
                            Bahasa Indonesia
                          </FormLabel>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormControl>
                      <div
                        className={`group relative cursor-pointer overflow-hidden rounded-xl border-2 transition-all hover:border-violet-400 ${
                          field.value === "en"
                            ? "border-violet-600 bg-violet-50 ring-2 ring-violet-600 ring-offset-2"
                            : "border-gray-200 hover:bg-gray-50"
                        }`}
                      >
                        <RadioGroupItem value="en" className="sr-only" />
                        <div className="flex items-center gap-3 p-4">
                          <span className="p-2">
                            🇬🇧
                          </span>
                          <FormLabel className="cursor-pointer font-medium">
                            English
                          </FormLabel>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default LanguageSection;
