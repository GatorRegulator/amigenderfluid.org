// pages/index.tsx
'use client';

import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMore(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "72pt",
            marginBottom: "80px",
          }}
        >
          yes.
        </p>
      </div>
      {showMore && (
        <div>
          <p style={{ fontSize: "13pt", lineHeight: "1.66" }}>
            Looking for more?<br /><br />
            <a href="https://genderfluid-support.tumblr.com/">
              <b>&ldquo;Genderfluid Support Network&rdquo;</b> on Tumblr
            </a><br />
            <a href="https://www.genderflux.xyz/">
              <b>&ldquo;Genderflux and Fluid Identities&rdquo;</b> by GenderFlux
            </a><br />
            <a href="https://nonbinary.wiki/wiki/Genderfluid">
              <b>&ldquo;Genderfluid Overview&rdquo;</b> on Nonbinary Wiki
            </a><br />
            <a href="https://www.reddit.com/r/genderfluid/">
              <b>&ldquo;Genderfluid Community&rdquo;</b> on Reddit
            </a><br />
            <a href="https://lgbtqia.ucsf.edu/glossary/gender-fluid">
              <b>&ldquo;Gender-fluid Definitions and Insights&rdquo;</b> by UCSF LGBTQIA+ Resource Center
            </a><br />
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
