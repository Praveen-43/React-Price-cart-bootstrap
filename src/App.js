import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
let details = [
  {
    title: "Free",
    price: "$0",
    feature: [
      { list: "Single User", class: "" },
      { list: "5GB Storage", class: "" },
      { list: "Unlimited Public Projects", class: "" },
      { list: "Community Access", class: "" },
      { list: "Unlimited Private Projects", class: "text-muted" },
      { list: "Dedicated Phone Support", class: "text-muted" },
      { list: "Free Subdomain", class: "text-muted" },
      { list: "Monthly Status Reports", class: "text-muted" },
    ]
  },
  {
    title: "Plus",
    price: "$9",
    feature: [
      { list: "Unlimited User", class: "" },
      { list: "50GB Storage", class: "" },
      { list: "Unlimited Public Projects", class: "" },
      { list: "Community Access", class: "" },
      { list: "Unlimited Private Projects", class: "" },
      { list: "Dedicated Phone Support", class: "" },
      { list: "Free Subdomain", class: "" },
      { list: "Monthly Status Reports", class: "text-muted" },
    ]
  },
  {
    title: "Pro",
    price: "$49",
    feature: [
      { list: "Unlimited User", class: "" },
      { list: "150GB Storage", class: "" },
      { list: "Unlimited Public Projects", class: "" },
      { list: "Community Access", class: "" },
      { list: "Unlimited Private Projects", class: "" },
      { list: "Dedicated Phone Support", class: "" },
      { list: "Unlimited Free Subdomain", class: "" },
      { list: "Monthly Status Reports", class: "" },
    ]
  },
];
function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {details.map((detail) => {
            return (
              <Card
                title={detail.title}
                price={detail.price}
                feature={detail.feature}
              ></Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
