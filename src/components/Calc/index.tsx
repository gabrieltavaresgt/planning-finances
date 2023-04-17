const arrayOfCounts = [
  { text: 'Test', value: 10 },
  { text: 'Test2', value: 20 },
  { text: 'Test3', value: -5 },
];

export const Calc = () => {
  const calcTotal = arrayOfCounts.reduce((acc, curr) => {
    return acc + curr.value;
  }, 0);

  return (
    <div>
      {arrayOfCounts.map((item) => (
        <div key={item.text}>
          <span>{item.text}</span> <span>{item.value}</span>
        </div>
      ))}
      <span>{`Total ${calcTotal}`}</span>
    </div>
  );
};
