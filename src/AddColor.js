import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState(['red', 'blue', 'cyan']);
  const styles = { backgroundColor: color };

  return (
    <div>
      <input style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter Input" />
      <button onClick={() => setColors([...colors, color])}>Add Color</button>
      {colors.map((clr, index) => (
        <ColorBox key={index} clr={clr} />
      ))}
    </div>
  );
}
