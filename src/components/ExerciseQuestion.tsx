'use client';

import { useState } from 'react';

interface ExerciseQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function ExerciseQuestion({
  question,
  options,
  correctAnswer,
}: ExerciseQuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setResult(null); // 선택 변경 시 이전 결과 초기화
  };

  const checkAnswer = () => {
    if (selected === null) return;
    if (selected === correctAnswer) {
      setResult('정답입니다!');
    } else {
      setResult('오답입니다. 다시 시도해보세요.');
    }
  };

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      <p className="mb-2">{question}</p>
      {options.map((option) => (
        <div key={option} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="exercise"
              value={option}
              checked={selected === option}
              onChange={() => handleSelect(option)}
              className="mr-2"
            />
            {option}
          </label>
        </div>
      ))}
      <button
        onClick={checkAnswer}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        제출
      </button>
      {result && <p className="mt-2">{result}</p>}
    </div>
  );
}
