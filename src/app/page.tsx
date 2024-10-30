"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { PersonalInfoSection } from "../components/personal-info";
import { useApplicationForm } from "./use-mutation-application";
import { CompanyInfoSection } from "../components/company-info";
import { JobDetailSection } from "../components/job-detail";
import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import LanguageSection from "@/components/language";

export default function Home() {
  const { form, progress } = useApplicationForm();

  return (
    <div className="flex flex-col min-h-screen items-center gap-4 sm:gap-8">
      <HeaderSection />
      {/* <TourGuide /> */}

      <main className="flex flex-col items-center gap-6 sm:gap-8 max-w-4xl w-full px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Buat{" "}
            <span className="text-purple-500 underline decoration-wavy">
              Surat Lamaran
            </span>
            <br className="hidden sm:block" />
            Sesuai Pekerjaan Impianmu
          </h1>
        </div>

        <Card className="w-full p-4 sm:p-8">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">Progress Pengisian</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 w-full"
              indicatorClassName="bg-gradient-to-r from-violet-600 to-fuchsia-500"
            />
          </div>

          <div className="p-6 sm:p-8">
            <Form {...form}>
              <form
                className="space-y-10" 
              >
                <PersonalInfoSection form={form} />
                <CompanyInfoSection form={form} />
                <JobDetailSection form={form} />
                <LanguageSection form={form} />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                    Generate Surat Lamaran
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>{" "}
              </form>
            </Form>
          </div>
        </Card>
      </main>
      <FooterSection />
    </div>
  );
}
