import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Milestones = () => {
  return (
    <>
      <Helmet>
        <title>Milestones | CyberQuest</title>
        <meta
          name="description"
          content="Milestones and progress updates for the CyberQuest project."
        />
      </Helmet>
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Project Milestones
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We will provide a detailed milestones table outlining objectives, completed work,
                current activities, and upcoming efforts.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-dashed border-border bg-muted/40 p-8 text-center text-muted-foreground">
              Milestones and objective tracking are coming soon.
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Milestones;
