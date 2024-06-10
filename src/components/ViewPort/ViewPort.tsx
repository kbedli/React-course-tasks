import { useViewPort } from "../../hooks/useViewPort";

export const ViewPort = () => {
  const { x, y } = useViewPort();
  return (
    <div>
      <p>
        X: {x} , Y:{y}
      </p>
    </div>
  );
};
