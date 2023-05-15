import { useState } from "react"

export const useSteps = (steps: JSX.Element[]) =>{
    const [currentStep, setCurrentStep] = useState(0)

    const changeSteps = (index: number) =>{
        if(index < 0 || index > steps.length) return
        setCurrentStep(index)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeSteps

    }
}