import { Grid } from "@material-ui/core";
import React, { useState, setValues } from "react";
import Form from "../../layouts/Form";
import { Button, Input, Select } from "../../controls";
import useForm from "../../hooks/useForm";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 1,
  paymentMethod: "none",
  grandTotal: 0,
  deletedOrderItemIds: "",
  orderDetails: [],
});

export default function OrderForm() {
  //Initialize the custom hook
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            disabled
            label="Order Number"
            name="orderNumber"
            value={values.orderNumber}
          ></Input>
          <Select
            label="Customer"
            name="customerId"
            options={customerOptions}
            value={values.customerId}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Input
            disabled
            label="Grand Total"
            name="grantTotal"
            value={values.grandTotal}
          ></Input>
          <Select
            label="Payemnt Method"
            name="paymentMethod"
            options={paymentMethods}
            value={values.paymentMethod}
            onChange={handleInputChange}
          />
        </Grid>
        <Button onClick={resetFormControls}>Reset</Button>
      </Grid>
    </Form>
  );
}

const customerOptions = [
  {
    id: 0,
    title: "Select",
  },
  {
    id: 1,
    title: "Customer1",
  },
  {
    id: 2,
    title: "Customer2",
  },
  {
    id: 3,
    title: "Customer3",
  },
  {
    id: 4,
    title: "Customer4",
  },
  {
    id: 5,
    title: "Customer5",
  },
];

const paymentMethods = [
  {
    id: "none",
    title: "N/A",
  },
  {
    id: "credit",
    title: "Credit Card",
  },
  {
    id: "cashondelivery",
    title: "Cash on Delivery",
  },
];
