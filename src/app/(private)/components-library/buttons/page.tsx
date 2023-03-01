import Button from "@/atoms/buttons/button";

export default function ButtonsPage() {
  return (
    <div>
      <h3>Button Component</h3>
      <p>Samples:</p>
      <Button>Text</Button>
      <Button variant="contained">Contained</Button>
      <br />
      <br />
      <Button color="secondary">Secondary</Button>
      <Button color="secondary" variant="contained">
        Secondary Contanined
      </Button>
    </div>
  );
}
