import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import background from "../assets/certificate-bg.jpg"; // Background image
import signature from "../assets/signature.png"; // Signature image

const today = new Date().toLocaleDateString("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const Certificate = ({ name, money, gifts }) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      {/* Background Image */}
      <View style={styles.backgroundContainer}>
        <Image src={background} style={styles.background} />
      </View>

      {/* Content Container */}
      <View style={styles.container}>
        <Text style={styles.subtitle}>
          This certificate is proudly presented to
          <Text style={styles.name}> {name} </Text>
          in recognition of their eligibility to receive the following tokens of love and blessings
          on the auspicious occasion of their wedding.
        </Text>
        <Text style={styles.amount}>INR {money}/- in Cash</Text>
        <Text style={styles.gifts}>{gifts}</Text>

        <Text style={styles.note}>
          This certificate serves as a formal acknowledgment of heartfelt appreciation and best wishes 
          from family and friends. May the journey ahead be filled with joy, love, and prosperity.
        </Text>

        {/* Signature Section */}
        <View style={styles.signatureContainer}>
          <View style={styles.signature}>
            <Image src={signature} style={styles.signatureImage} />
            <Text style={styles.signatureText}>_____________</Text>
            <Text style={styles.signatureName}>Authorized Signatory</Text>
          </View>
          <View style={styles.signature}>
            <Text style={styles.signatureText}>{today}</Text>
            <Text style={styles.signatureName}>Date</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: { position: "relative", flexDirection: "row", justifyContent: "center", alignItems: "center" },

  // Background Image
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  background: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  container: {
    textAlign: "center",
    padding: 40,
    width: "75%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 105,
  },
  subtitle: { fontSize: 20, marginBottom: 15, color: "#444" },
  name: { fontSize: 20, fontWeight: "bold", color: "#444" },
  amount: { fontSize: 24, fontWeight: "bold", color: "#28a745", marginBottom: 10 },
  gifts: { fontSize: 22, fontStyle: "italic", color: "#007bff" },
  note: { fontSize: 16, fontStyle: "italic", color: "#555", marginTop: 5 },

  // Signature Section
  signatureContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signature: {
    textAlign: "center",
  },
  signatureImage: {
    width: 120,
    height: 50,
    marginBottom: -33,
  },
  signatureText: { fontSize: 14, color: "#333" },
  signatureName: { fontSize: 16, marginTop: 5, color: "#555" },
});

export default Certificate;
