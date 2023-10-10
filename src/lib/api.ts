import axios from "axios";

type reservation = {
  email?: string;
  foundMessage?: string;
  fullname?: string;
  comment?: string;
  telephone?: string;
  date?: Date;
  horaire?: string;
};

export const sendContactForm = async (data: reservation) =>
  fetch("/api/reservation", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

type inscriptionData = {
  email?: string;
};
export const inscrireNewsLetter = async (data: inscriptionData) =>
  fetch("/api/inscription", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

type contactusData = {
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
  message: string;
};

export const sendContactUsForm = async (data: contactusData) => {
  fetch("/api/contactus", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });

};

export const addAssociation = async (data: any) => {
  try {
    await axios({
      method: "post",
      url: "/api/contactus",
      data: data,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
  } catch (error) {
    throw new Error("Failed to send message");
  }
};
