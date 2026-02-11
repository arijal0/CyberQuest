import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | CyberQuest</title>
        <meta
          name="description"
          content="Contact the CyberQuest project team at Fisk University."
        />
      </Helmet>
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                If you would like to learn more about the CyberQuest project, collaborate with us,
                or explore educational opportunities, please contact:
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-card p-6 text-center shadow-soft">
              <p className="text-lg font-semibold text-foreground">CyberQuest Project Team</p>
              <p className="mt-2 text-muted-foreground">
                Department of Computer Science
                <br />
                Fisk University
              </p>
              <a
                className="mt-4 inline-block text-accent hover:text-accent/80"
                href="mailto:nzhang@fisk.edu"
              >
                nzhang@fisk.edu
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                We are also requesting a dedicated project email address and will update this page
                once it is available.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
