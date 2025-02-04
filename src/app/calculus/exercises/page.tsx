import ExerciseQuestion from '../../../components/ExerciseQuestion';

export default function ExercisesPage() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>미적분 연습문제</h2>
      <p>아래의 문제를 풀어보고 정답을 확인해보세요:</p>
      
      {/* 간단한 연습문제 예시 */}
      <ExerciseQuestion
        question="다음 함수 f(x) = x²의 도함수는 무엇인가요?"
        options={['2x', 'x', 'x²', '2']}
        correctAnswer="2x"
      />

      {/* 추가 문제를 원한다면 아래와 같이 컴포넌트를 추가할 수 있습니다. */}
      
      {/* <ExerciseQuestion
        question="함수 f(x) = sin(x)의 도함수는?"
        options={['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)']}
        correctAnswer="cos(x)"
      /> */}
     
    </div>
  );
}