import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import LoadingIndicator from "../components/Loading";
import Select from "../components/Select";

const HomePageWrapper = styled.div`
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Error = styled.div`
  color: red;
  margin-bottom: 0.5rem;
`;

const Success = styled.div`
  color: green;
  margin-bottom: 0.5rem;
`;

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    job: "",
    department: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    console.log(JSON.stringify(formData));

    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      let data = await response.json();
      setError(data.errors[0].message);
      setLoading(false);
    } else {
      setSuccess("Your form has been submitted successfully!");
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <HomePageWrapper>
      <h1>You Want Leads?</h1>
      <p>
        We can help you get them. Fill out the form below and we'll get back to
        you.
      </p>
      <form onSubmit={handleSubmit}>
        {success && <Success>{success}</Success>}
        <FormGroup>
          <Input
            label="Name"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="Job"
            id="job"
            name="job"
            type="text"
            value={formData.job}
            onChange={handleChange}
          />

          <Input
            label="Company"
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Select
            label="Department"
            id="department"
            name="department"
            options={[
              { value: "sales", label: "Sales" },
              { value: "marketing", label: "Marketing" },
              { value: "customer_service", label: "Customer Service" },
              { value: "hr", label: "HR" },
              { value: "finance", label: "Finance" },
              { value: "engineering", label: "Engineering" },
              { value: "product", label: "Product" },
              { value: "design", label: "Design" },
              { value: "it", label: "IT" },
            ]}
            value={formData.department}
            onChange={handleChange}
          />
        </FormGroup>
        {error && <Error>{error}</Error>}

        <Button type="submit" disabled={loading}>
          {loading ? <LoadingIndicator /> : "Submit"}
        </Button>
      </form>
    </HomePageWrapper>
  );
};

export default HomePage;
