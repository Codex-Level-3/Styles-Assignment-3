"use client";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

export default function PlanetCards({ title, description, src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "linear",
        scale: { type: "spring", damping: 5, stiffness: 100 },
      }}
    >
      <Card
        className="text-center bg-zinc-950 text-white shadow-xl"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={src} alt={alt} />
        <Card.Body>
          <Card.Title className="font-bold text-2xl">{title}</Card.Title>
          <Card.Text className="text-xl">{description}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
