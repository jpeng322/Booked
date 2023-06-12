import { useState } from "react";
import {
  useForm,
  useFormContext,
  FormProvider,
  useFieldArray,
  Controller,
} from "react-hook-form";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Stack,
  Table,
} from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { applyOnboarding } from "../api";
import { registerLocale } from "react-datepicker";

const Initial = () => {
  const { register } = useFormContext();
  return (
    <div>
      <Form.Group className="mb-2">
        <Form.Label>What is your name?</Form.Label>
        <Stack direction="horizontal" gap={2}>
          <Form.Control
            type="text"
            size="lg"
            placeholder="First Name"
            {...register("firstName")}
          />
          <Form.Control
            type="text"
            size="lg"
            placeholder="Last Name"
            {...register("lastName")}
          />
        </Stack>
      </Form.Group>
      <Form.Group className="mb-2">
        <ul className="list-style-none">
          <li>
            <Form.Check
              type="radio"
              label="I'm just starting out, and need customers for my new business"
              name="needs"
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="I have an existing business but I want to grow it to the next level"
              name="needs"
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="I'm just looking for customers to fill gaps in my schedule"
              name="needs"
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="None of these apply to me"
              name="needs"
            />
          </li>
        </ul>
      </Form.Group>
    </div>
  );
};

const ResponseTime = () => {
  const { register } = useFormContext();
  return (
    <div>
      <Form.Group className="mb-2">
        <ul className="list-style-none">
          <li>
            <Form.Check
              type="radio"
              label="1-3 hours"
              value="1-3 hours"
              {...register("responseTime")}
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="3-7 hours"
              value="3-7 hours"
              {...register("responseTime")}
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="End of business day"
              value="End of business day"
              {...register("responseTime")}
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="Next Business day"
              value="Next Business day"
              {...register("responseTime")}
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="Within 24 hours"
              value="Within 24 hours"
              {...register("responseTime")}
            />
          </li>
          <li>
            <Form.Check
              type="radio"
              label="Within 48 hours"
              value="Within 48 hours"
              {...register("responseTime")}
            />
          </li>
        </ul>
      </Form.Group>
    </div>
  );
};

const PaymentMethod = () => {
  const { register } = useFormContext();
  return (
    <div>
      <Form.Group className="mb-2">
        <ul className="list-style-none">
          <li>
            <Form.Check
              type="checkbox"
              label="Credit or Debit Card"
              value="credit-or-debit"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Zelle"
              value="zelle"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Venmo or Cashapp"
              value="venmo"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Google/Apple Pay"
              value="google-and-apple-pay"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Square"
              value="square"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Cash/Check"
              value="cash-or-check"
              {...register("paymentMethods")}
            />
          </li>
        </ul>
      </Form.Group>
    </div>
  );
};

const ServicesProvided = () => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name: "listOfServices",
  });
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>List services that you provide</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((item, index) => (
            <tr key={item.id}>
              <td>
                <Controller
                  render={({ field }) => (
                    <Form.Group className="mb-2">
                      <Form.Control type="text" {...field} />
                    </Form.Group>
                  )}
                  name={`listOfServices.${index}.service`}
                  control={control}
                />
              </td>
              <td>
                <Controller
                  render={({ field }) => (
                    <Form.Group className="mb-2">
                      <Form.Control type="number" {...field} />
                    </Form.Group>
                  )}
                  name={`listOfServices.${index}.price`}
                  control={control}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              <Button
                variant="light"
                onClick={() => append({ service: "", price: 0 })}
              >
                <FaPlusCircle />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

const MoreInfo = () => {
  const { register } = useFormContext();
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>What area do you primarily serve?</Form.Label>
        <Form.Control
          type="text"
          placeholder="City, state, zipcode"
          {...register("areaServed")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Are you background check certified? Yes or No</Form.Label>
        <Form.Select {...register("backgroundCertified")}>
          <option value={null}>Open this select menu</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>How many employees do you have?</Form.Label>
        <Form.Control
          type="number"
          {...register("amountOfEmployees", {
            valueAsNumber: true,
          })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>How many years have you been in business?</Form.Label>
        <Form.Control
          type="number"
          {...register("yearsInBusiness", {
            valueAsNumber: true,
          })}
        />
      </Form.Group>
    </div>
  );
};

const ProviderOnboarding = () => {
  const [formStep, setFormStep] = useState(1);
  const methods = useForm({
    defaultValues: {
      listOfServices: [
        {
          service: "",
          price: 0,
        },
      ],
    },
  });

  const submitProviderInfo = async (values) => {
    console.log(values);

    const data = await applyOnboarding(values);

    console.log(data);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="step-pill"></div>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>
            <FormProvider {...methods}>
              <Form onSubmit={methods.handleSubmit(submitProviderInfo)}>
                {formStep == 1 && <Initial />}
                {formStep == 2 && <ResponseTime />}
                {formStep == 3 && <PaymentMethod />}
                {formStep == 4 && <ServicesProvided />}
                {formStep == 5 && <MoreInfo />}
                <Row>
                  <Col>
                    {formStep > 1 && (
                      <Button
                        type="button"
                        onClick={() =>
                          setFormStep((prevState) => prevState - 1)
                        }
                      >
                        Back
                      </Button>
                    )}
                  </Col>
                  <Col>
                    {formStep <= 4 && (
                      <Button
                        type="button"
                        onClick={() =>
                          setFormStep((prevState) => prevState + 1)
                        }
                      >
                        Next
                      </Button>
                    )}
                    {formStep == 5 && (
                      <Button type="submit">Create Account</Button>
                    )}
                  </Col>
                </Row>
              </Form>
            </FormProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProviderOnboarding;
