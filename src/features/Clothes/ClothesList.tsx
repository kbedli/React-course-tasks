// import { Link } from "react-router-dom";
// import { useAppDispatch } from "../../hooks/redux";
// import { Button } from "../../ui";
import { Link } from "react-router-dom";
import { ClothesDto } from "../../types/Clothes";

type Props = {
  clothes: ClothesDto[];
};

export const ClothesList = ({ clothes }: Props) => {
  //   const dispatch = useAppDispatch();

  //   return (
  //     <div>
  //       <p>Clothes</p>
  //       <ul>
  //         {clothes.map((cloth) => (
  //           <li key={cloth.id} className="flex my-2">
  //             <Link to={`/products/${product.id}`} className="text-blue-500">
  //             {cloth.fields.name} ({cloth.fields.price.toString()} zł){" "}
  //             </Link>
  //             <Button
  //                 label="+"
  //                 onClick={() => dispatch(add(cloth))}
  //                 className="ml-2"
  //               ></Button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return (
    <div>
      <p>Clothes</p>
      <ul>
        {clothes.map((cloth) => (
          <li key={cloth.id} className="flex my-2">
            {cloth.fields.name} ({cloth.fields.price.toString()} zł){" "}
            <Link
              to={`/clothes/edit/${cloth.id}`}
              className="text-blue-500 ml-3"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
