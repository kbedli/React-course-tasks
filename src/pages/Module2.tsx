import { ChangesHistory } from "../components/ChangesHistory";
import { ComponentGenerator } from "../components/ComponentGenerator";
import { DynamicForm } from "../components/DynamicForm/DynamicForm";
import { FormWizard } from "../components/FormWizard";

export const Module2 = () => {
  return (
    <>
      <p className="mt-5 text-lg font-bold">MODULE 2</p>
      <p className="mt-3 text-lg font-bold mb-3">
        Zadanie 1: Generator komponentów
      </p>
      <ComponentGenerator />
      <p className="mt-3 text-lg font-bold mb-3">Zadanie 2: Form wizard</p>
      <FormWizard />
      <p className="mt-3 text-lg font-bold mb-3">Zadanie 3: Historia zmian</p>
      <ChangesHistory />
      <p className="mt-3 text-lg font-bold mb-3">
        Zadanie 4: Dynamiczny formularza
      </p>
      <DynamicForm />
    </>
  );
};
