import Button from "@/atoms/buttons/button";

type Props = {};

export default function ButtonsPage({}: Props) {
  return (
    <div>
      <h3>Button Component</h3>
      <p>Samples:</p>
      <Button>Primary Button</Button>
      <br />
      <br />
      <Button variant="secondary">Secundary Button</Button>
    </div>
  );
}
