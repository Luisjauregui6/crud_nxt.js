interface FieldType {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
}

const fieldsData: FieldType[] = [
  {
    name: "firstName",
    type: "text",
    label: "nombre",
    placeholder: "...",
  },
  {
    name: "lastName",
    type: "text",
    label: "apellido",
    placeholder: "...",
  },
  {
    name: "email",
    type: "email",
    label: "email",
    placeholder: "...",
  },
  {
    name: "salary",
    type: "number",
    label: "número",
    placeholder: "...",
  },
];

export default fieldsData;
