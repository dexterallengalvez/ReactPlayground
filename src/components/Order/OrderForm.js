import { Grid } from "@material-ui/core";
import React from "react";
import Form from "../../layouts/Form";
import { Button, Input, Select } from "../../controls";

export default function OrderForm() {
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input label="Order Number" name="orderNumber" disabled></Input>
          <Select
            label="Customer"
            name="customerId"
            options={customerOptions}
          />
        </Grid>
        <Grid item xs={6}>
          <Input label="Grand Total" name="grantTotal" disabled></Input>
          <Select
            label="Payemnt Method"
            name="paymentMethod"
            options={paymentMethods}
          />
        </Grid>
        <Button>Button</Button>
      </Grid>
    </Form>
  );
}

const customerOptions = [
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
