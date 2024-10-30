import { useState, useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { X } from "lucide-react"

interface TourStep {
  target: string
  title: string
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const tourSteps: TourStep[] = [
  {
    target: "#personal-info",
    title: "Upload CV-mu Di Sini, Jangan Malu-Malu!",
    content: "Tinggal seret dan lepas aja, gampang kan? Kita tunggu dengan sabar kok! 😊",
    position: "bottom"
  },
  {
    target: "#company-info",
    title: "Isi Informasi Perusahaan",
    content: "Isi informasi perusahaan dengan benar, jangan lupa ya! 😊",
    position: "bottom"
  },
  {
    target: "#job-detail",
    title: "Isi Detail Pekerjaan",
    content: "Isi detail pekerjaan dengan benar, jangan lupa ya! 😊",
    position: "bottom"
  }
  // Add more steps as needed
]

const TourGuide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const [hasSeenTour, setHasSeenTour] = useState(false)
  const [currentTarget, setCurrentTarget] = useState<Element | null>(null)

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenTour')
    if (seen) {
      setHasSeenTour(true)
      setIsOpen(false)
    }

    const target = document.querySelector(tourSteps[currentStep]?.target)
    setCurrentTarget(target)
  }, [currentStep])

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleComplete()
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(0, prev - 1))
  }

  const handleComplete = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenTour', 'true')
    setHasSeenTour(true)
  }

  if (hasSeenTour || !currentTarget) return null

  return (
    <>
      {/* Blurred background */}
      <div className="fixed inset-0 m-5 z-50" />
      
      {/* Clear hole for the target */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none bg-black/75 backdrop-blur-md"
        style={{
          mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'%3E%3Cdefs%3E%3Cmask id='mask'%3E%3Crect width='100%' height='100%' fill='white'/%3E%3Crect x='${currentTarget.getBoundingClientRect().left - 16}' y='${currentTarget.getBoundingClientRect().top - 16}' width='${currentTarget.getBoundingClientRect().width + 32}' height='${currentTarget.getBoundingClientRect().height + 32}' fill='black'/%3E%3C/mask%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='currentColor' mask='url(%23mask)'/%3E%3C/svg%3E")`,
          WebkitMask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'%3E%3Cdefs%3E%3Cmask id='mask'%3E%3Crect width='100%' height='100%' fill='white'/%3E%3Crect x='${currentTarget.getBoundingClientRect().left - 16}' y='${currentTarget.getBoundingClientRect().top - 16}' width='${currentTarget.getBoundingClientRect().width + 32}' height='${currentTarget.getBoundingClientRect().height + 32}' fill='black'/%3E%3C/mask%3E%3C/defs%3E%3Crect width='100%' height='100%' fill='currentColor' mask='url(%23mask)'/%3E%3C/svg%3E")`,
          maskMode: 'alpha',
        }}
      />

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div ref={(ref) => {
            if (ref) {
              ref.style.position = 'absolute';
              const targetRect = currentTarget.getBoundingClientRect();
              ref.style.left = `${targetRect.left}px`;
              ref.style.top = `${targetRect.top}px`;
              ref.style.width = `${targetRect.width}px`;
              ref.style.height = `${targetRect.height}px`;
              ref.style.pointerEvents = 'none';
            }
          }} />
        </PopoverTrigger>
        <PopoverContent
          className="w-80 p-4"
          side={tourSteps[currentStep]?.position}
          sideOffset={5}
          align="center"
        >
          <div className="relative">
            <button
              onClick={handleComplete}
              className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
            
            <div className="mb-4">
              <h3 className="font-medium mb-1">{tourSteps[currentStep]?.title}</h3>
              <p className="text-sm text-gray-600">{tourSteps[currentStep]?.content}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {currentStep + 1} of {tourSteps.length}
              </div>
              <div className="flex gap-2">
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevious}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  size="sm"
                  onClick={handleNext}
                >
                  {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default TourGuide;