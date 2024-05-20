"use client";
import React from "react";
import Link from "next/link";

export default function Menu() {
  const dishes = [
    { id: "le-brothers", name: `Le Brother${`&aposs;`}` },
    { id: "le-big-brothers", name: "Le BIG Brother's" },
    { id: "le-og", name: "Le OG" },
    { id: "le-reuben", name: "Le reuben" },
  ];

  return (
    <ul>
      {dishes.map((dish) => (
        <Link
          key={dish.id}
          href={{
            pathname: `/la-carte/${dish.id}`,
            query: { title: dish.name },
          }}
        >
          {dish.name}
        </Link>
      ))}
    </ul>
  );
}
