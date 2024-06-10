import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../ui";
import { type RegistrationFormData, validationSchema } from "./types";
import { MouseEventHandler, useReducer, useId } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type State = {
  users: User[];
  editUser: User;
};

enum ActionType {
  ADD_USER = "add-user",
  DELETE_USER = "delete-user",
  EDIT_USER = "edit-user",
}

type Action = {
  type: ActionType;
  payload: User | string;
};

const initialState: State = {
  users: [],
  editUser: {
    id: "",
    firstName: "",
    lastName: " ",
    email: "",
  },
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_USER:
      if (action.payload) {
        return { ...state, users: [...state.users, action.payload] };
      } else {
        return state;
      }

    case ActionType.DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload)],
      };

    case ActionType.EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return { ...state, editUser: action.payload };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export const AddUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddingUser: MouseEventHandler<HTMLInputElement> = () =>  (dispatch(addNewUser(newUser));)

  const handleRegistrationForm: RegistrationFormData = () => {
    // console.log(data);
    // console.log(data.firstName);
    console.log(state.users);

    dispatch({
      type: ActionType.ADD_USER,
      payload: {
        id: "4546",
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      },
    });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: ActionType.DELETE_USER, payload: id });
  };

  const handleEdit = (id: string) => {
    dispatch({ type: ActionType.EDIT_USER, payload: id });
  };

  return (
    <>
      <form onSubmit={handleRegistrationForm}>
        <Input
          label="First Name"
          value={state.editUser.firstName}
          onChange={(e) =>
            dispatch({
              type: ActionType.EDIT_USER,
              payload: { firstName: e.target.value },
            })
          }
        />
        <Input label="Last Name" />

        <Input label="Email" type="email" />

        <Button label="Send" type="submit" />
      </form>

      {state.users.map((user: User) => {
        const { id, firstName, lastName, email } = user;
        return (
          <>
            <div key={id}>
              {id}, {firstName}, {lastName}, {email}
            </div>
            <Button label="Delete" onClick={() => handleDelete(user.id)} />
            <Button label="Edit" onClick={() => handleEdit(user.id)} />
          </>
        );
      })}
    </>
  );
};

// App.tsx
// <input
//   type="text"
//   value={state.newTodoValue}
//   onChange={(e) =>
//     dispatch({
//       type: UPDATE_VALUE,
//       payload: { description: e.target.value },
//     })
//   }
// />
