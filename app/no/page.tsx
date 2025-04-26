import Link from "next/link";

const NoPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", padding: "20px" }}>
      <div>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "72pt",
            marginBottom: "40px",
          }}
        >
          no.
        </p>
      </div>
      <div style={{ fontSize: "13pt", lineHeight: "1.66" }}>
        <p>How do you feel? Were you expecting this?</p>
        <p>Do you want to try again?</p>
        <p>
          Maybe here:{" "}
          <Link href="/">
            <a style={{ textDecoration: "underline", color: "#0070f3" }}></a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NoPage;
