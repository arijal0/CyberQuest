import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Cryptography = () => {
  return (
    <>
      <Helmet>
        <title>CyberQuest</title>
        <meta
          name="description"
          content="Overview of the Cryptography course developed through the CyberQuest project."
        />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="section-padding bg-background">
            <div className="container-wide">
              <div className="mx-auto max-w-3xl space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Cryptography
                </h1>
                <p className="text-lg text-muted-foreground">
                  This course explores encryption algorithms, cryptographic protocols, and secure
                  communication methods. Students gain hands-on experience implementing modern
                  cryptographic techniques.
                </p>
                <p className="text-muted-foreground">
                  Detailed course objectives, topics, and lab activities will be added soon.
                </p>
                <Link to="/outcomes">
                  <Button variant="outline">Back to Outcomes</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cryptography;
