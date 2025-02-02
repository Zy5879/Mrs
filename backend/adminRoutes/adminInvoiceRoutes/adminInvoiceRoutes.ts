import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const adminInvoiceRoutes = Router();

adminInvoiceRoutes.get("/invoice", async (_req, res) => {
  try {
    const invoices = await prisma.invoice.findMany();
    if (!invoices) {
      res.status(200).json({ message: "No Invoices Available" });
    } else {
      res.status(200).json(invoices);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
    return;
  }
});
