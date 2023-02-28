import ExampleGrid from '@/molecules/grids/grid';

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage(props: any) {
  return (
    <>
      <h1>Projects</h1>
      <ExampleGrid />
    </>
  );
}
