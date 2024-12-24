import React from 'react';
import Button from './Button';

// Komponen Button menerima props `label` dan `onClick`
// const Button = ({ label, onClick }) => {
//   return (
//     <button onClick={onClick}>
//       {label}
//     </button>
//   );
// };

// Komponen Props yang menggunakan komponen Button
const Props = () => {
  const handleClick = () => {
    alert('Button clicked! buddy ');
  };

  return (
    <div>
      {/* <h1>Welcome to React</h1> */}
      {/* Menyertakan Button dengan props label dan onClick */}
      <Button backgroundColor="grey" label="Click Me buddy !" onClick={handleClick} />
    </div>
  );
};

export default Props;

