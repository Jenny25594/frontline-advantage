'use client';

import { useState } from 'react';

const assessmentSteps = [
  {
    title: 'What\'s your current role?',
    options: ['Sales Representative', 'Operations Manager', 'Customer Service', 'Technical Support', 'Leadership'],
  },
  {
    title: 'How many years of experience do you have?',
    options: ['Less than 1 year', '1-3 years', '3-5 years', '5+ years'],
  },
  {
    title: 'What\'s your primary focus for growth?',
    options: ['Leadership Skills', 'Sales Excellence', 'Technical Expertise', 'Customer Service', 'Team Management'],
  },
];

export function AssessmentFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / assessmentSteps.length) * 100;

  if (showResults) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-base p-6">
        <div className="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-xl">
          <div className="mb-6 text-center">
            <div className="mb-4 text-5xl">🎉</div>
            <h1 className="text-3xl font-bold text-neutral-900">Assessment Complete!</h1>
            <p className="mt-2 text-neutral-600">Your personalized growth path is ready.</p>
          </div>

          <div className="my-8 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: '📊', label: 'Current Level', value: 'Intermediate' },
                { icon: '🎯', label: 'Growth Potential', value: 'High' },
                { icon: '⏱️', label: 'Time to Mastery', value: '12 weeks' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="mt-2 text-sm text-neutral-600">{item.label}</div>
                  <div className="mt-1 font-bold text-neutral-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-4 font-semibold text-neutral-900">Your Top Focus Areas</h3>
            <div className="space-y-3">
              {['Leadership Communication', 'Decision Making', 'Conflict Resolution'].map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-lg bg-primary-50 p-4">
                  <div className="h-3 w-3 rounded-full bg-primary-base" />
                  <span className="font-medium text-neutral-900">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button className="btn-secondary flex-1">Review in detail</button>
            <button className="btn-primary flex-1">Start learning</button>
          </div>
        </div>
      </div>
    );
  }

  const step = assessmentSteps[currentStep];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-base p-6">
      <div className="w-full max-w-2xl rounded-[28px] bg-white p-8 shadow-xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-neutral-900">Step {currentStep + 1} of {assessmentSteps.length}</span>
            <span className="text-neutral-500">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-base to-secondary-base transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="mb-8 text-3xl font-bold text-neutral-900">{step.title}</h2>

        {/* Options */}
        <div className="mb-8 space-y-3">
          {step.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full rounded-xl border-2 p-4 text-left font-medium transition-all ${
                selectedAnswers[currentStep] === option
                  ? 'border-primary-base bg-primary-50 text-primary-900'
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="btn-secondary flex-1 disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedAnswers[currentStep]}
            className="btn-primary flex-1 disabled:opacity-50"
          >
            {currentStep === assessmentSteps.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
