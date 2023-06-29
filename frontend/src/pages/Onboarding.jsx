import { useEffect, useState } from "react";
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
import { FaPlusCircle, FaArrowLeft } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import { applyOnboarding } from "../api";
import "../CSS/ProviderOnboarding.css";
import { useNavigate, useParams } from "react-router-dom";
import GooglePlacesComp from "../components/GooglePlacesAutocomplete";
import Spinner from 'react-bootstrap/Spinner';
// import { uploadProfileImages } from "../api";

const Initial = () => {
  const { register } = useFormContext();
  return (
    <div className="onboarding-form">
      <h1 className="text-center">Tell us more about your business</h1>
      <Form.Group className="mb-2">
        <Form.Label>What is your name?</Form.Label>
        <Stack className="mb-4" direction="horizontal" gap={4}>
          <Form.Control
            type="text"
            size="lg"
            placeholder="Business Name"
            {...register("businessName")}
          />
        </Stack>
        <Stack direction="horizontal" gap={4}>
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
        <Form.Label>Which best describes your needs? </Form.Label>
        <ul>
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
      <h1 className="text-center">What is your estimated response time?</h1>
      <Form.Group className="mb-2">
        <ul>
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
      <h1 className="text-center">What payment methods do you accept?</h1>
      <Form.Group className="mb-2">
        <ul>
          <li>
            <Form.Check
              type="checkbox"
              label="Credit or Debit Card"
              value="Credit/Debit"
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
              label="Venmo"
              value="venmo"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Cashapp"
              value="cashapp"
              {...register("paymentMethods")}
            />
          </li>
          <li>
            <Form.Check
              type="checkbox"
              label="Google"
              value="google pay"
              {...register("paymentMethods")}
            />
          </li>

          <li>
            <Form.Check
              type="checkbox"
              label="Apple Pay"
              value="Apple Pay"
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
              value="Cash/Check"
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
  const { register, setValue } = useFormContext();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file) => {
      setValue("serviceImages", file);
    },
    maxFiles: 10,
  });

  // console.log()

  return (
    <>
      <Table
        borderless
        className="d-flex flex-column gap-5 justify-content-center align-items-center"
      >
        <div>
          <thead>
            <tr>
              <th>
                <h2 className="text-center">List services that you provide</h2>
              </th>
              <th>
                <h2 className="text-center">Price</h2>
              </th>
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
                <div className="d-flex justify-content-center">
                  <Button
                    variant="light"
                    onClick={() => append({ service: "", price: 0 })}
                  >
                    <FaPlusCircle />
                  </Button>
                </div>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </div>
        <div {...getRootProps({ className: "dropzone mb-3 pointer " })}>
          <input {...getInputProps()} />
          <p className="service-images-upload">
            Click here to upload pictures of your business!
          </p>
        </div>
        <div className="business-type-container">
          <h2 className="text-center mb-3 ">
            What category is your business involved in?
          </h2>
          <Form.Group className="mb-2">
            <ul className="d-flex ">
              <li>
                <Form.Check
                  type="radio"
                  label="home improvement"
                  value="home improvement"
                  {...register("businessType")}
                />
              </li>
              <li>
                <Form.Check
                  type="radio"
                  label="landscaping"
                  value="landscaping"
                  {...register("businessType")}
                />
              </li>
              <li>
                <Form.Check
                  type="radio"
                  label="automotive"
                  value="automotive"
                  {...register("businessType")}
                />
              </li>
              <li>
                <Form.Check
                  type="radio"
                  label="personal care"
                  value="personal care"
                  {...register("businessType")}
                />
              </li>
            </ul>
            <ul className="d-flex">
              <li>
                <Form.Check
                  type="radio"
                  label="pet care"
                  value="pet_care"
                  {...register("businessType")}
                />
              </li>
              <li>
                <Form.Check
                  type="radio"
                  label="designer & artist"
                  value="designer artist"
                  {...register("businessType")}
                />
              </li>
              <li>
                <Form.Check
                  type="radio"
                  label="events"
                  value="events"
                  {...register("businessType")}
                />
              </li>
              <li>
                <Form.Check
                  type="radio"
                  label="technology"
                  value="technology"
                  {...register("businessType")}
                />
              </li>
            </ul>
          </Form.Group>
        </div>
      </Table>
    </>
  );
};

const MoreInfo = ({ areaAddress, setAreaAddress }) => {
  const { register, setValue } = useFormContext();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (file) => {
      setValue("profilePicture", file);
    },
    maxFiles: 1,
  });

  return (
    <div className="d-flex flex-column ">
      <h1 className="text-center">Lastly, specify your information below</h1>
      <Form.Group className="mb-3">
        <Form.Label>What area do you primarily serve?</Form.Label>
        <GooglePlacesComp
          address={areaAddress}
          setAddress={setAreaAddress}
          placeholder="Input State, City, or Zip Code"
        />
      </Form.Group>

      <div {...getRootProps({ className: "dropzone mb-3 align-self-center" })}>
        <input {...getInputProps()} />
        <p className="profile-upload">Click here to choose a profile picture</p>
      </div>

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
  const [areaAddress, setAreaAddress] = useState("");
  const [formStep, setFormStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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

  const navigate = useNavigate();
  let { id } = useParams();

  const submitProviderInfo = async (values, address = areaAddress) => {
    console.log(values, "VALUESVLUAES");
    setIsLoading(true);

    const data = await applyOnboarding(values, areaAddress);
    if (data) {
      navigate(`/provider/bookings/${id}`);
    }

    console.log(data, "datatat");
  };

  return (
    <div className="p-xxl-5 pt-5 pb-5 onboarding-container">
      <Container fluid>
        <div className="mb-5">
          <Row>
            <Col>
              <div
                className={`step-pill ${formStep >= 1 ? "active-pill" : "not-active-pill"
                  }`}
              ></div>
            </Col>
            <Col>
              <div
                className={`step-pill ${formStep >= 2 ? "active-pill" : "not-active-pill"
                  }`}
              ></div>
            </Col>
            <Col>
              <div
                className={`step-pill ${formStep >= 3 ? "active-pill" : "not-active-pill"
                  }`}
              ></div>
            </Col>
            <Col>
              <div
                className={`step-pill ${formStep >= 4 ? "active-pill" : "not-active-pill"
                  }`}
              ></div>
            </Col>
            <Col>
              <div
                className={`step-pill ${formStep >= 5 ? "active-pill" : "not-active-pill"
                  }`}
              ></div>
            </Col>
          </Row>
        </div>
        <div className="mx-auto">
          <Row>
            <Col>
              <FormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(submitProviderInfo)}>
                  <div className="mx-auto onboarding-main-form mb-5">
                    {formStep == 1 && <Initial />}
                    {formStep == 2 && <ResponseTime />}
                    {formStep == 3 && <PaymentMethod />}
                    {formStep == 4 && <ServicesProvided />}
                    {formStep == 5 && (
                      <MoreInfo
                        areaAddress={areaAddress}
                        setAreaAddress={setAreaAddress}
                      />
                    )}
                  </div>
                  <Row className="onboarding-button-container">
                    <Col md={6}>
                      <div className="d-flex ">
                        {formStep > 1 && (
                          <Button
                            type="button"
                            size="lg"
                            onClick={() =>
                              setFormStep((prevState) => prevState - 1)
                            }
                            className="back-button"
                          >
                            <span className="d-flex justify-content-center align-items-center">
                              <FaArrowLeft />
                              <span className="ms-2">Back</span>
                            </span>
                          </Button>
                        )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex">
                        {formStep <= 4 && (
                          <Button
                            size="lg"
                            type="button"
                            onClick={() =>
                              setFormStep((prevState) => prevState + 1)
                            }
                            className="next-button"
                          >
                            Next
                          </Button>
                        )}
                        {formStep == 5 && (
                          <Button
                            className="next-button"
                            size="lg"
                            type="submit"
                            disabled={isLoading}
                          >
                            {
                              isLoading ? (
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                />
                              )
                                :
                                ("Create Account")
                            }
                            {/* Create Account */}
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Form>
              </FormProvider>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProviderOnboarding;
