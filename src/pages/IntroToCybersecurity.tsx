import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const IntroToCybersecurity = () => {
  return (
    <>
      <Helmet>
        <title>Introduction to Cybersecurity | CyberQuest</title>
        <meta
          name="description"
          content="Overview of the Introduction to Cybersecurity course developed through the CyberQuest project."
        />
      </Helmet>
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Introduction to Cybersecurity
              </h1>
              <p className="text-lg text-muted-foreground">
                This foundational course introduces core security principles, threat landscapes,
                risk assessment, and defensive strategies. Students develop essential knowledge for
                cybersecurity careers and the broader CyberQuest concentration.
              </p>
              <p className="text-muted-foreground">
                Detailed course objectives, topics, and lab activities will be shared soon.
              </p>
              <Link to="/outcomes">
                <Button variant="outline">Back to Outcomes</Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IntroToCybersecurity;
